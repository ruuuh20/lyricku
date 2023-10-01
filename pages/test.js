// pages/songs.js (or any other page component)

import { useEffect, useState } from 'react';

function SongsPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      try {
        // Fetch songs from the server-side route
        const response = await fetch('/api/getSongs');
        if (response.ok) {
          const data = await response.json();
          setSongs(data);
        } else {
          console.error('Error fetching songs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    }

    // Call the fetchSongs function to fetch songs when the component mounts
    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>
            <h2>{song.title}</h2>
            <p>Artist: {song.artist}</p>
            <p>Lyrics: {song.lyrics}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongsPage;
