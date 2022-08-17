import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  document.documentElement.dataset.scroll = "0";
  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = "" + window.scrollY;
  });

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <div className={location == "/" ? "current" : ""}>Character</div>
        </Link>
        <Link to="/quests">
          <div className={location == "/quests" ? "current" : ""}>Quests</div>
        </Link>
        <Link to="/backstory">
          <div className={location == "/backstory" ? "current" : ""}>
            Backstory
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
