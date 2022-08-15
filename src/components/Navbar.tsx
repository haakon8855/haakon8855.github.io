import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button>
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MenuIcon"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div className="links">
        <Link to="/">Character</Link>
        <Link to="/projects">Quests</Link>
        <Link to="/experience">Log</Link>
      </div>
    </div>
  );
};

export default Navbar;
