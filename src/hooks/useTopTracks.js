import { useState, useEffect } from "react";
import axios from "axios";
import useSpotify from "./useSpotify";

export default function useTopTracks(limit = 10) {
  const token = useSpotify();
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchTopTracks = async () => {
      try {
        const response = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
          headers: { Authorization: `Bearer ${token}` },
          params: { limit },
        });

        setTopTracks(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
  }, [token, limit]);

  return { topTracks, loading, error };
}
