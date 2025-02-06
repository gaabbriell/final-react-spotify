import useTopTracks from "../hooks/useTopTracks";
import { motion } from "framer-motion"
import "../styles/Songs.css";

export default function Songs() {
  const { topTracks, loading, error } = useTopTracks(10);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching top songs!</p>;

  return (
    <div>
      <h1>Your Top 10 Most Listened Songs</h1>
      <div className="song-container">
        {topTracks.map((song, index) => (
          <motion.div
            key={song.id}
            className="song-item"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: index * 0.2 }} 
            >
              <img src={song.album.images[0]?.url} alt={song.name} width={100} />
              <p>{song.name}</p>
              <p>{song.artists[0]?.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
