// pages/api/createSong.js
import createNewSong from '../../createSong'; // Import your function for creating songs
import dbConnect from 'libs/mongodb';

export default async function handler(req, res) {
  dbConnect();
  if (req.method === 'POST') {
    const songData = req.body; // Retrieve song data from the request body

    try {
      // Call your function to create and save the song
      console.log("hello")
      await createNewSong(songData);
      res.status(200).json({ message: 'Song created successfully' });
    } catch (error) {
      console.error('Error creating song:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


// export default async function handler(req, res) {
//   console.log('Received request:', req.method, req.url);
//   res.status(200).json({ message: 'Song created successfully' });
// }