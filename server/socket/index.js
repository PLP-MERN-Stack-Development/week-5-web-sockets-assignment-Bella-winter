const Message = require("../models/Message");
const  User = require("../models/User");

module.exports = (io) => {
  const onlineUsers = new Map();  user

  io.on("connection", (socket) => {
    console.log(`📡 User connected: ${socket.id}`);

    
    socket.on("joinRoom", async ({ username, roomId }) => {
      let user = await User.findOneAndUpdate(
        { username },
        { socketId: socket.id, isOnline: true },
        { new: true, upsert: true }
      );

      onlineUsers.set(socket.id, user);

      socket.join(roomId);

      io.to(roomId).emit("userJoined", { user, roomId });

      const online = await User.find({ isOnline: true }).select("username");
      io.to(roomId).emit("onlineUsers", online);
    });

    // Typing
    socket.on("typing", ({ roomId, username }) => {
      socket.to(roomId).emit("typing", username);
    });

    socket.on("stopTyping", ({ roomId, username }) => {
      socket.to(roomId).emit("stopTyping", username);
    });

    // Send Message
    socket.on("sendMessage", async ({ roomId, content }) => {
      const user = onlineUsers.get(socket.id);
      if (!user) return;

      const message = await Message.create({
        sender: user._id,
        room: roomId,
        content,
      });

      const fullMessage = await message.populate("sender", "username");
      io.to(roomId).emit("newMessage", fullMessage);
    });

    // Private Message
    socket.on("privateMessage", async ({ toUsername, content }) => {
      const sender = onlineUsers.get(socket.id);
      const recipient = await User.findOne({ username: toUsername });

      if (!recipient || !recipient.socketId) return;

      const message = await Message.create({
        sender: sender._id,
        to: recipient._id,
        content,
        isPrivate: true,
      });

      const fullMessage = await message.populate("sender", "username");

      socket.to(recipient.socketId).emit("privateMessage", fullMessage);
      socket.emit("privateMessage", fullMessage);
    });

    // Disconnect
    socket.on("disconnect", async () => {
      const user = onlineUsers.get(socket.id);
      if (user) {
        await User.findByIdAndUpdate(user._id, {
          isOnline: false,
          socketId: null,
        });

        onlineUsers.delete(socket.id);

        io.emit("userOffline", user.username);
        const updated = await User.find({ isOnline: true }).select("username");
        io.emit("onlineUsers", updated);

        console.log(`🔌 ${user.username} disconnected`);
      }
    });
  });
};