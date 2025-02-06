import { useEffect, useState } from "react";
import queryString from "query-string";

const useSpotify = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromUrl = queryString.parse(window.location.hash).access_token;
    console.log("Token from URL:", tokenFromUrl); 

    if (tokenFromUrl) {
      localStorage.setItem("spotify_token", tokenFromUrl);
      setToken(tokenFromUrl);
      console.log("Token saved to localStorage:", tokenFromUrl);

      window.history.replaceState({}, document.title, "/");
    } else {
      const savedToken = localStorage.getItem("spotify_token");
      if (savedToken) {
        setToken(savedToken);
        console.log("Using saved token from localStorage:", savedToken);
      } else {
        console.log("No token found. Redirecting to Spotify login...");
        const redirectUri = "https://gaabbriell.github.io/final-react-spotify";
        window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user-top-read`;
      }
    }
  }, []);

  return token;
};

export default useSpotify;
