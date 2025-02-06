import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopArtists from "./pages/TopArtists";
import Songs from "./pages/Songs";
import Albums from "./pages/Albums";
import Navbar from "./components/Navbar";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TopArtists />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/songs" element={<Songs />}/>
        <Route path="/trending-albums" element={<Albums />}  />
      </Routes>
    </Router>
  );
}
