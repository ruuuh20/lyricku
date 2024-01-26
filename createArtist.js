// createArtist.js
import Artist from './models/artist'; // Import your Mongoose model

async function createNewArtist(artistData) {
  // Extract data from the artistData object
  const { name, profileImage, bio } = artistData;

  // Create a new artist document
  const newArtist = new Artist({
    name,
    profileImage,
    bio,
  });

  try {
    // Save the new artist to the database
    await newArtist.save();
    console.log('Artist saved successfully.');
  } catch (error) {
    console.error('Error saving artist:', error);
    throw error;
  }
}

export default createNewArtist;
