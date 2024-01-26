// pages/api/getArtists.js
import dbConnect from 'libs/mongodb';
import Artist from "../../models/artist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const artists = await Artist.find({});
      res.status(200).json({ success: true, data: artists });
    } catch (error) {
      console.error("Error fetching artists:", error);
      res.status(500).json({ success: false, error: "Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
