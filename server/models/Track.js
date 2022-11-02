const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
  brushReplacementDate: {
    type: Date,
    required: false,
  },
  streak: {
    type: Number,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Track", TrackSchema);
