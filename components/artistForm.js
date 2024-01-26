// ArtistForm.js
import { useState } from "react";

function ArtistForm() {
  const [artistData, setArtistData] = useState({
       artistId: "", // Include artistId in the form
    name: "",
    profileImage: "",
    bio: "",
     songs: [],  // Include an array for song data
  });
  // Add state for song selection
const [selectedSong, setSelectedSong] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtistData({ ...artistData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the artistData to the server-side route
    const response = await fetch("/api/createArtist", {
      method: "POST",
      body: JSON.stringify({...artistData, selectedSong} ),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Handle success, e.g., clear the form
      setArtistData({
           artistId: "", 
        name: "",
        profileImage: "",
        bio: "",
         songs: [],  
      });
    } else {
      // Handle error
      console.error("Error creating artist in form:", response.statusText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-2">
         <label className="mr-1">Artist ID:</label>
        <input
          type="text"
          name="artistId"
          value={artistData.artistId}
          onChange={handleInputChange}
        />
        <label className="mr-1">Name:</label>
        <input
          type="text"
          name="name"
          value={artistData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="py-2">
        <label className="mr-1">Profile Image URL:</label>
        <input
          type="text"
          name="profileImage"
          value={artistData.profileImage}
          onChange={handleInputChange}
        />
      </div>
      <div className="py-2">
        <label className="mr-1">Bio:</label>
        <textarea
          name="bio"
          value={artistData.bio}
          onChange={handleInputChange}
        />
      </div>
      <button className="p-2 mt-2 border-2" type="submit">
        Create Artist
      </button>
    </form>
  );
}

export default ArtistForm;
