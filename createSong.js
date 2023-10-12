// // createSong.js
// import Song from '../models/Song'; // Adjust the import path as needed

// async function createNewSong() {
//   const newSongData = {
//     title: 'Song Title',
//     artist: 'Artist Name',
//     lyrics: 'These are the lyrics...',
//   };

//   const newSong = new Song(newSongData);

//   try {
//     await newSong.save(); // Save the document to the database
//     console.log('Song saved successfully.');
//   } catch (error) {
//     console.error('Error saving song:', error);
//   }
// }

// export default createNewSong;

// createSong.js
import Song from './models/song'; // Import your Mongoose model

async function createNewSong(songData) {
  // Extract data from the songData object
  const { title, artist, lyrics,  lyricsK,
    lyricsE, thumbnail } = songData;

  // Parse lyrics and perform any other necessary operations
//   const parsedLyrics = await parseLyrics(lyrics); // Replace with your parsing logic

  // Create a new song document
  const newSong = new Song({
    title,
    artist,
    // lyrics: parsedLyrics, // Use the parsed lyrics
    lyrics,
    lyricsK,
    lyricsE,
    thumbnail
  });


  try {
      console.log(newSong)
    // Save the new song to the database
    await newSong.save();
    console.log('Song saved successfully.');
  } catch (error) {
    console.error('Error saving song:', error);
    throw error;
  }
}

export default createNewSong;

