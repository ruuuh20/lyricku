import ArtistForm from "@/components/artistForm";
import Layout from "@/components/layout";
import SongForm from "@/components/songForm";

export default function AddASong() {
  return (
    <>
      <Layout />
      <h1>Add a song or artist here</h1>
      <SongForm />
      <ArtistForm />
    </>
  );
}
