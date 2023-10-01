

// getSongs.js
import Song from '../models/Song'; // Adjust the import path as needed

async function getSongs() {
  try {
    const songs = await Song.find(); // Retrieve all songs from the database
    console.log('Songs retrieved successfully.');
    console.log(songs);
    return songs;
  } catch (error) {
    console.error('Error retrieving songs:', error);
    throw error;
  }
}

export default getSongs;
