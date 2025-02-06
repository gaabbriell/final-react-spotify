import { useEffect, useState } from "react";
import queryString from "query-string";

const useSpotify = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromUrl = queryString.parse(window.location.hash).access_token;
    
    if (tokenFromUrl) {
      localStorage.setItem("spotify_token", tokenFromUrl);
      setToken(tokenFromUrl);

      window.history.pushState("", "", window.location.pathname + window.location.search);
    } else {
      const savedToken = localStorage.getItem("spotify_token");
      if (savedToken) {
        setToken(savedToken);
      } else {
        window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${window.location.origin}&scope=user-top-read`;
      }
    }
  }, []);

  return token;
};

export default useSpotify;