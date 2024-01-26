// models/artist.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  artistId: { type: String, unique: true },
  name: String,
  profileImage: String, // URL to the profile image
  bio: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});

// const Artist = mongoose.model('Artist', artistSchema);

// module.exports = Artist;
const Artist = mongoose.models.Artist || mongoose.model('Artist', artistSchema);

export default Artist;