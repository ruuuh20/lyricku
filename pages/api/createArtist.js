// pages/api/createArtist.js
import dbConnect from 'libs/mongodb';
import Artist from "../../models/artist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { artistId, name, profileImage, bio, songs } = req.body;

      // Check if artistId is unique before creating a new artist
      const existingArtist = await Artist.findOne({ artistId });
      if (existingArtist) {
        return res
          .status(400)
          .json({ success: false, error: "ArtistId must be unique" });
      }

      const newArtist = new Artist({
        artistId,
        name,
        profileImage,
        bio,
        // songs,  // Include the songs array
      });

      await newArtist.save();

      res.status(200).json({ success: true, data: newArtist });
    } catch (error) {
      console.error("Error creating artist:", error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
