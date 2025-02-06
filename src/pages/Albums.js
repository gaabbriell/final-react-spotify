import useTrendingAlbums from "../hooks/useTrendingAlbums"; 
import { motion } from "framer-motion";
import "../styles/Albums.css";

export default function Albums() {
  const { trendingAlbums, loading, error } = useTrendingAlbums(10);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching top albums!</p>;

  return (
    <div>
      <h1>Top 10 Trending Albums Right Now</h1>
      <div className="album-container">
        {trendingAlbums.map((album, index) => (
          <motion.div
            key={album.id}
            className="album-item"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: index * 0.2 }} 
          >
            <img src={album.images[0]?.url} alt={album.name} width={100} />
            <p>{album.name}</p>
            <p>{album.artists[0]?.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
