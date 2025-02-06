import { useState, useEffect } from "react";
import axios from "axios";
import useSpotify from "./useSpotify";

export default function useTopArtists(limit = 10) {
  const token = useSpotify();
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchTopArtists = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/artists", {
          headers: { Authorization: `Bearer ${token}` },
          params: { limit },
        });

        setTopArtists(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, [token, limit]);

  return { topArtists, loading, error };
}
