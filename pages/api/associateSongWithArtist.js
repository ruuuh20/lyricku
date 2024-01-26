// associateSongWithArtist.js
const mongoose = require('mongoose');

import Artist from "../../models/artist";
import Song from "../../models/song";   
import dbConnect from 'libs/mongodb';
// const Artist = require('../../models/artist.js');
// const Song = require('../../models/song.js');

export default async function associateSongWithArtist(req, res) {
    console.log('Entering associateSongWithArtist function');
     await dbConnect();
     console.log(req.body)

      if (req.method === 'POST') {
  try {
     const { title, artist, lyrics, lyricsE, lyricsK, thumbnail }  = req.body;
    // Create an artist (or find an existing one based on some criteria)
    const artistObject = await Artist.findOne({ name: artist });
if (!artistObject) {
      throw new Error('Artist not found'); // Handle the case where the artist is not found
    }

    // Create a song associated with the artist
    const song = new Song({
      title: 'Song Title',
      artist: artist ? artistObject._id : null, // Reference to the artist if found
       lyrics: 'THese are the lyrics..',
  lyricsK: 'THese are the lyrics..',
  lyricsE: 'THese are the lyrics..',
    });

    await song.save();

    console.log('Song created and associated with the artist successfully.');

  } catch (error) {
    console.error('Error associating Song with Artist:', error);
 return { success: false, error: error.message };
  }
//    finally {
//     mongoose.disconnect();
//   }
}
}

// Run the function
// associateSongWithArtist('Artist Name');
