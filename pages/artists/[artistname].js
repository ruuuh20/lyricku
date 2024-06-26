// import { useRouter } from 'next/router';

// const ArtistPage = ({artist}) => {
//   const router = useRouter();
//   const { artistname } = router.query;
//   console.log(artist)

//   return (
//     <div>
//       <h1>Artist: {artistname}</h1>
//       {/* Add more content related to the artist here */}
//     </div>
//   );
// };

// export default ArtistPage;

import { useRouter } from 'next/router';

const ArtistPage = ({ artist }) => {
  const router = useRouter();
  const { artistname } = router.query;
console.log(artist)
  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artist: {artist.name}</h1>
      <p>Bio: {artist.bio}</p>
      Songs
         <ul>
         {artist.songs && artist.songs.map((song) => (
          <li key={song._id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch all artist names to generate dynamic paths
  const response = await fetch(`${process.env.API_URL}/api/getArtists`);
  const { data } = await response.json();

  const paths = data.map((artist) => ({
    params: { artistname: artist.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the specific artist's data based on the artist name
  const { artistname } = params;


  try {
    const response = await fetch(`${process.env.API_URL}/api/getArtists?name=${encodeURIComponent(artistname)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch artist data: ${response.statusText}`);
    }

    const artistData = await response.json();

    if (!artistData.success) {
      throw new Error(artistData.error || 'Unknown error occurred');
    }

  // const response = await fetch(`${process.env.API_URL}/api/getArtist?name=${encodeURIComponent(artistname)}`);
  // const artistData = await response.json();

  return {
    props: {
      artist: artistData.data,
    },
  };
  } catch (error) {
    console.error('Error fetching artist data:', error);
    return {
      notFound: true,
    };
  }
}



export default ArtistPage;