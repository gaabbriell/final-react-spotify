import { useState, useEffect } from "react";
import axios from "axios";
import useSpotify from "./useSpotify";

export default function useTrendingAlbums(limit = 10) {
  const token = useSpotify();
  const [trendingAlbums, setTrendingAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchTrendingAlbums = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/browse/new-releases", {
          headers: { Authorization: `Bearer ${token}` },
          params: { limit },
        });

        setTrendingAlbums(response.data.albums.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingAlbums();
  }, [token, limit]);

  return { trendingAlbums, loading, error };
}
