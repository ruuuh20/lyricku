import dbConnect from 'libs/mongodb';
import Song from '../../models/song';

export default async function handler(req, res) {
  dbConnect();

  if (req.method === 'GET') {
    try {
      const recentSongs = await Song.find().sort({ createdAt: -1 }).limit(5);
      res.status(200).json({ success: true, data: recentSongs });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}