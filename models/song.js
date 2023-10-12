// models/Song.js
import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  lyrics: String,
  lyricsK: String,
  lyricsE: String,
  thumbnail: String,

});

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);

export default Song;
