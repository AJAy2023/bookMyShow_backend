const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  movieName: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    enum: ["Action", "Love", "Drama", "Horror", "Comedy"],
    required: true
  },
  releaseDate: {
    type: Date,
    default: Date.now
  },
  castList: [{
    role: {
      type: String,
      enum: ["Hero", "Actress", "Director", "Singer", "Villain"]
    },
    name: String
  }],
  ticketPrice: {
    type: Number,
    default: 0
  },
  songList: [String] 
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);
