import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "../styles/Navbar.css"; 

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link to="/">Top Artists</Link>
      <Link to="/songs">Top Songs</Link>
      <Link to="/trending-albums">Trending Albums</Link>

      <button onClick={toggleTheme} style={{
          marginLeft: "15px",
          background: "none",
          border: "1px solid #fff",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "15px",
        }}> Dark/Light
      </button>
    </nav>
  );
}