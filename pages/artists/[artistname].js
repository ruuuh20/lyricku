import { useRouter } from 'next/router';

const ArtistPage = () => {
  const router = useRouter();
  const { artistname } = router.query;

  return (
    <div>
      <h1>Artist: {artistname}</h1>
      {/* Add more content related to the artist here */}
    </div>
  );
};

export default ArtistPage;