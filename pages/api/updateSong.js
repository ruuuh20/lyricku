// pages/api/updateSong.js

import dbConnect from 'libs/mongodb'; // Ensure you have a database connection
import Song from '../../models/song'; // Import your Song model

dbConnect(); // Connect to the database

export default async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const { id, title, artist, thumbnail, /* other fields */ } = req.body;

      // Find the song by ID
      const song = await Song.findById(id);

      if (!song) {
        return res.status(404).json({ error: 'Song not found' });
      }

      // Update the song data
      song.title = title;
      song.artist = artist;
      song.thumbnail = thumbnail;
      // Update other fields as needed

      // Save the updated song to the database
      await song.save();

      return res.status(200).json({ message: 'Song updated successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error updating song' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
