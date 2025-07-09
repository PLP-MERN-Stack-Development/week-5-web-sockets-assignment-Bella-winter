const mongoose = require("mongoose");


const roomSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
        description: {
          type: String,
          default: 'Global room for everyone',
    },
  isGlobal: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

module.exports = mongoose.model("Room", roomSchema)