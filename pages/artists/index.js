
import Link from 'next/link';

const ArtistsPage = ({ artists }) => {
  return (
    <div>
      <h1>All Artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist._id}>
            <Link href={`/artists/${encodeURIComponent(artist.name)}`}>
              {artist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/api/getArtists`);
  const { data } = await response.json();
  return {
    props: {
      artists: data,
    },
  };
}

export default ArtistsPage;