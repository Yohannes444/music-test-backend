const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: false,
      default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fvideo-icon%2F&psig=AOvVaw0gdTyIi5TV1HixSdDdhsEW&ust=1724850403543000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCrmM-elYgDFQAAAAAdAAAAABAE"
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
