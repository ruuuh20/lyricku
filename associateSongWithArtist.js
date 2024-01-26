// associateSongWithArtist.js
import mongoose from 'mongoose';
import Artist from '/models/artist'
import Song from '/models/song';
import dbConnect from 'libs/mongodb';

async function associateSongWithArtist(artistObject, title, lyrics, lyricsK, lyricsE) {
      console.log('Entering associateSongWithArtist function');
  console.log('Artist Object:', artistObject); 
  await dbConnect();

  try {
    const artist = await Artist.findOne({ name: artistObject.name });

    if (!artist) {
      throw new Error('Artist not found');
    }

    const song = new Song({
      title,
      artist: artist ? artist._id : null,
      lyrics,
      lyricsK,
      lyricsE,
    });

    await song.save();

      // Update the artist's 'songs' array
    artist.songs.push(song._id);
    await artist.save();

    console.log('Song created and associated with the artist successfully.');
    return { success: true };

  } catch (error) {
    console.error('Error associating Song with Artist:', error);
    return { success: false, error: error.message };

  } finally {
    // Do not disconnect here, let the calling function handle the disconnect.
  }
}

// Export the function for use in other files
export default associateSongWithArtist;
