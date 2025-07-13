const User = require("../models/User");

exports.loginUser = async (req, res) => {
    const { username } = req.body;
    
      if (!username || username.trim() === "") {
    return res.status(400).json({ error: "Username is required" });
  }

    const cleanUsername = username.trim().toLowerCase();


    try {
        let user = await User.findOne({ username: cleanUsername });
        if (!user) user = await User.create({ username: cleanUsername });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message});
        }
    };

    // Login user
exports.loginUser = async (req, res) => {
  const { username } = req.body;

  if (!username || username.trim() === "") {
    return res.status(400).json({ error: "Username is required" });
  }

  const cleanUsername = username.trim().toLowerCase();

  try {
    const user = await User.findOne({ username: cleanUsername });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};