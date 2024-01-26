// pages/api/createSong.js
import dbConnect from 'libs/mongodb';
import associateSongWithArtist from '../../associateSongWithArtist'; // Adjust the path as needed
import Song from '../../models/song';
import Artist from "../../models/artist";

export default async function handler(req, res) {
  await dbConnect();

   console.log(req.body)

  if (req.method === 'POST') {
    try {
      const { artist, title, lyrics, lyricsK, lyricsE } = req.body;
     // Assuming artist is an object with a name property
      const artistName = artist ? artist : null;
console.log(artistName)
      // Fetch the artist object based on the name
    const artistObject = await Artist.findOne({ name: artistName });

        if (!artistObject) {
      // Handle the case where the artist is not found
      return res.status(400).json({ success: false, error: 'Artist not found' });
    }

    // const { name: artistName } = artist;
    console.log(artistObject, 'this is artist object')
      const result = await associateSongWithArtist(artistObject, title, lyrics, lyricsK, lyricsE);

      if (result.success) {
        // Song is associated with the artist, continue with saving the song
        const song = new Song({
          title,
          artist: artistObject, // Assuming you store artist names directly in the Song model
          lyrics,
          lyricsK,
          lyricsE,
        });

        await song.save();

        res.status(200).json({ success: true, data: song });
      } else {
        // Handle the case where associating the song with the artist failed
        res.status(500).json({ success: false, error: result.error });
      }
    } catch (error) {
      console.error('Error creating song:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
