import { useState } from 'react';

function SongForm() {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    lyrics: '',
    lyricsE: '',
    lyricsK: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the songData to the server-side route
    const response = await fetch('/api/createSong', {
      method: 'POST',
      body: JSON.stringify(songData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Handle success, e.g., clear the form
      setSongData({ title: '', artist: '', lyrics: '', lyricsE: '', lyricsK: '' });
    } else {
      // Handle error
      console.error('Error creating song in form:', response.statusText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={songData.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={songData.artist}
          onChange={handleInputChange}
        />
      </label>
      <div>
      <label>
        Lyrics:
        <textarea
          name="lyrics"
          value={songData.lyrics}
          onChange={handleInputChange}
        />
      </label>
     
      <label>
        LyricsE:
        <textarea
          name="lyricsE"
          value={songData.lyricsE}
          onChange={handleInputChange}
        />
      </label>
       <label>
        LyricsK:
        <textarea
          name="lyricsK"
          value={songData.lyricsK}
          onChange={handleInputChange}
        />
      </label>
      </div>
      <button type="submit">Create Song</button>
    </form>
  );
}

export default SongForm;
