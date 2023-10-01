
import Link from 'next/link';

function HomePage({ songs }) {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Link href="/songs">
        View Songs
      </Link>
      <h2>Recent Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song._id}>
            <h3>{song.title}</h3>
            <p>Artist: {song.artist}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  // Fetch songs data from the server-side route or database
  const response = await fetch('http://localhost:3000/api/getSongs');
  const songs = await response.json();

  return {
    props: {
      songs,
    },
  };
};

export default HomePage;
