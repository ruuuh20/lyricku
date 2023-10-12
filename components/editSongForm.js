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
        <div>
          Title:
                <input
          type="text"
          name="title"
          value={updatedSong.title}
          onChange={handleInputChange}
                />
        </div>
      <div>
        Artist:
        <input
          type="text"
          name="artist"
          value={updatedSong.artist}
          onChange={handleInputChange}
        />
      </div>
      
        <div>
          Lyrics:
          <textarea
            name="lyrics"
            value={updatedSong.lyrics}
            onChange={handleInputChange}
          />
        </div>
        <div>
          LyricsK:
          <textarea
            name="lyricsK"
            value={updatedSong.lyricsK}
            onChange={handleInputChange}
          />
        </div>
        <div>
          LyricsE
          <textarea
            name="lyricsE"
            value={updatedSong.lyricsE}
            onChange={handleInputChange}
          />
        </div>
        <div>
          Thumbnail: 
         <input
       

            name="thumbnail"
            value={updatedSong.thumbnail}
             onChange={handleInputChange}
          />
        </div>
      {/* Other input fields for editing */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditSongForm;
