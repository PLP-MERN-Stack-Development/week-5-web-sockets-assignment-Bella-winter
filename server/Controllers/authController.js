const User = require("../models/User");

exports.registerUser = async (req, res) => {
    const { username } = req.body;
    console.log(" Login attempt:", username);
    
      if (!username || username.trim() === "") {
    console.error(" Username is required");
    return res.status(400).json({ error: "Username is required" });
  }

    const cleanUsername = username.trim().toLowerCase();


    try {
        let user = await User.findOne({ username: cleanUsername });
        console.log("Searching for user:", cleanUsername);


        if (!user) user = await User.create({ username: cleanUsername });
        console.log(" New user created:", user.username);
        return res.status(200).json({ message: "Login successful", user });

    } catch (error) {
      console.error(" Login error:", error.message);
        res.status(500).json({ error: "Failed to login." });
        }
    };