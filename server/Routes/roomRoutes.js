const express = require("express");
const router = express.Router();
const { getRooms, createRoom } = require("../Controllers/roomController");

// GET /api/rooms - Get all chat rooms
router.get("/", getRooms);

// POST /api/rooms - Create a new chat room
router.post("/", createRoom);

module.exports = router;