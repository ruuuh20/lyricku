import { useState, useEffect } from "react";

function SongForm() {
  const [songData, setSongData] = useState({
    title: "",
    artist: "",
    lyrics: "",
    lyricsE: "",
    lyricsK: "",
    thumbnail: "",
  });
  const [artists, setArtists] = useState([]); // State to store artists for dropdown

  useEffect(() => {
    // Fetch the list of artists to populate the dropdown
    const fetchArtists = async () => {
      const response = await fetch("/api/getArtists");
      if (response.ok) {
        const artistList = await response.json();
        setArtists(artistList.data);
      }
    };

    fetchArtists();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the songData to the server-side route
    const response = await fetch("/api/createNewSong", {
      method: "POST",
      body: JSON.stringify(songData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Handle success, e.g., clear the form
      setSongData({
        title: "",
        artist: "",
        lyrics: "",
        lyricsE: "",
        lyricsK: "",
        thumbnail: "",
      });
    } else {
      // Handle error
      console.error("Error creating song in form:", response.statusText);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="py-2">
        <label className="mr-1">Title:</label>
        <input
          type="text"
          name="title"
          value={songData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="mr-1">Artist:</label>
        {/* <input
          type="text"
          name="artist"
          value={songData.artist}
          onChange={handleInputChange}
        /> */}
        <select
          name="artist"
          value={songData.artist}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select an artist
          </option>
          {artists.map((artist) => (
            <option key={artist._id} value={artist.name}>
              {artist.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="my-2">
          <label className="mr-1">Lyrics:</label>
          <textarea
            name="lyrics"
            value={songData.lyrics}
            onChange={handleInputChange}
          />
        </div>

        <div className="my-2">
          <label className="mr-1">LyricsE:</label>
          <textarea
            name="lyricsE"
            value={songData.lyricsE}
            onChange={handleInputChange}
          />
        </div>
        <div className="my-2">
          <label className="mr-1">LyricsK:</label>
          <textarea
            name="lyricsK"
            value={songData.lyricsK}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label for="thumbnail">Thumbnail URL:</label>
          <input
            onChange={handleInputChange}
            id="thumbnail"
            name="thumbnail"
            value={songData.thumbnail}
          />
        </div>
      </div>
      <button className="p-2 mt-2 border-2" type="submit">
        Create Song
      </button>
    </form>
  );
}

export default SongForm;
