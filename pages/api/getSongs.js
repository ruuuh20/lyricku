// pages/api/getSongs.js

import dbConnect from 'libs/mongodb';// Import your dbConnect function
import Song from '../../models/song'; // Import your Mongoose model

export default async function handler(req, res) {
  // Establish the database connection
  dbConnect();

  if (req.method === 'GET') {
    try {
      // Fetch all songs from the database
      const songs = await Song.find();
      res.status(200).json(songs);
    } catch (error) {
      console.error('Error retrieving songs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
