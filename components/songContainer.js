// YourReactComponent.js

import songs from '../pages/api/data/songData'; // Import the song data

function SongContainer() {
  // You can map over the songs array and render each song
  return (
    <div>
      {songs.map((song, index) => (
        <div key={index}>
          <h2>{song.title}</h2>
          <p>Artist: {song.artist}</p>
          <p>Lyrics: {song.lyrics}</p>
          {/* <img src={song.thumbnail} alt={`${song.title} Thumbnail`} /> */}
          <a href={song.link} target="_blank" rel="noopener noreferrer">
            Listen to Song
          </a>
        </div>
      ))}
    </div>
  );
}

export default SongContainer;
