import useTopArtists from "../hooks/useTopArtists";
import { motion } from "framer-motion"; 
import "../styles/TopArtists.css";

export default function Home() {
  const { topArtists, loading, error } = useTopArtists(10);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching top artists!</p>;

  return (
    <div>
      <h1>Your Top 10 Artists</h1>
      <div className="artist-container">
        {topArtists.map((artist, index) => (
          <motion.div
            key={artist.id}
            className="artist-item"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: index * 0.2 }} 
          >
            <img src={artist.images[0]?.url} alt={artist.name} width={100} />
            <p>{artist.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
