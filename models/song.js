// models/Song.js
import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: String,
    artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  lyrics: String,
  lyricsK: String,
  lyricsE: String,
  thumbnail: String,
 
},
{ timestamps: true } // Add timestamps option);
);

const Song = mongoose.models.Song || mongoose.model('Song', songSchema);

export default Song;
