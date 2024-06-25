// pages/api/getArtists.js
import dbConnect from 'libs/mongodb';
import Artist from "../../models/artist";
import Song from "../../models/song"; 

export default async function handler(req, res) {
  await dbConnect();

  // const { name } = req.query; // Retrieve the name query parameter

  // if (req.method === "GET") {
  //   try {
  //      let artists;
  //     if (name) {
  //       // Find the artist by name if name query parameter is provided
  //       artists = await Artist.findOne({ name: name });
  //     } else {
  //       // Otherwise, fetch all artists
  //       artists = await Artist.find({});
  //     }

  //     res.status(200).json({ success: true, data: artists });
  //   } catch (error) {
  //     console.error("Error fetching artists:", error);
  //     res.status(500).json({ success: false, error: "Server Error" });
  //   }
  // } else {
  //   res.status(405).json({ success: false, error: "Method Not Allowed" });
  // }


  if (req.method === "GET") {
    try {
      const name = req.query.name;
      let artists;
      if (name) {
        // Find the artist by name if name query parameter is provided
        artists = await Artist.findOne({ name: name }).populate('songs');
      } else {
        // Otherwise, fetch all artists
        artists = await Artist.find({}).populate('songs');
      }

      if (!artists) {
        return res.status(404).json({ success: false, error: 'No artists found' });
      }

      // Check if the artist(s) have an empty songs array
      if (Array.isArray(artists.songs) && artists.songs.length === 0) {
        console.log(`Artist ${artists.name} has no songs associated.`);
      }

      res.status(200).json({ success: true, data: artists });
    } catch (error) {
      console.error("Error fetching artists:", error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
  

