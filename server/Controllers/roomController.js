const Room = require("../models/Room");

// GET /api/rooms - Fetch all rooms
exports.getRooms = async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
};

// POST /api/rooms - Create a new room
exports.createRoom = async (req, res) => {
    const { name } = req.body;
    try {
        const room = await Room.create({ name });
        res.json(room);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
