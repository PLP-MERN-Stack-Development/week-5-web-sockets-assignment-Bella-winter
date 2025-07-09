const express = require("express");
const router = express.Router();
const { getRoomMessages } = require("../Controllers/messageController");

// GET /api/messages/:roomId - Get messages for a specific room
router.get("/:roomId", getRoomMessages);

module.exports = router;