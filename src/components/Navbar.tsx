import "../styles/Navbar.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = () => {
  history.scrollRestoration = "manual";
  // window.scrollTo(0, 0);
  document.documentElement.dataset.scroll = "0";
  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = "" + window.scrollY;
  });

  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

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
