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
      {/* Add more artist details here */}
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



export default ArtistPage;