import React, { useState } from 'react';

async function updateSong(songId, updatedData) {
  try {
    const response = await fetch(`/api/updateSong`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: songId,
        ...updatedData,
      }),
    });

    if (response.ok) {
      // Song updated successfully
      const result = await response.json();
      
    } else {
      // Handle errors
      const errorData = await response.json();
      console.error('Error updating song:', errorData.error);
    }
  } catch (error) {
    console.error('Error updating song:', error);
  }
}

function EditSongForm({ song }) {
  const [updatedSong, setUpdatedSong] = useState({ ...song });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSong({ ...updatedSong, [name]: value });
  };

  const handleSave = () => {
    // Call the updateSong function to update the song
    updateSong(song._id, updatedSong);
  };

  return (
    <div>
        TItle
      <input
        type="text"
        name="title"
        value={updatedSong.title}
        onChange={handleInputChange}
      />
      Artist:
      <input
        type="text"
        name="artist"
        value={updatedSong.artist}
        onChange={handleInputChange}
      />
      
        Lyrics:
        <textarea
          name="lyrics"
          value={updatedSong.lyrics}
          onChange={handleInputChange}
        />
        LyricsK:
        <textarea
          name="lyricsK"
          value={updatedSong.lyricsK}
          onChange={handleInputChange}
        />
        LyricsE
        <textarea
          name="lyricsE"
          value={updatedSong.lyricsE}
          onChange={handleInputChange}
        />
      {/* Other input fields for editing */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditSongForm;
