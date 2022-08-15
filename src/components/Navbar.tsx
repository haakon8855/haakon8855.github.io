import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  document.documentElement.dataset.scroll = "0";
  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = "" + window.scrollY;
  });

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Character</Link>
        <Link to="/quests">Quests</Link>
        <Link to="/log">Log</Link>
      </div>
    </div>
  );
};

export default Navbar;
