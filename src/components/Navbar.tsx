import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";

const Navbar = () => {
  const location = useLocation().pathname;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 600);
  const [isOpen, setIsOpen] = useState(false);

  const updateDesktopState = () => {
    setIsDesktop(window.innerWidth >= 600);
    if (isDesktop) {
      setIsOpen(false);
    }
  };

  const closeFullscreenNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDesktopState);
    return () => window.removeEventListener("resize", updateDesktopState);
  });

  if (window.scrollY == 0) {
    document.documentElement.dataset.scroll = "0";
  }
  document.addEventListener("scroll", () => {
    document.documentElement.dataset.scroll = "" + window.scrollY;
  });

  useEffect(() => {
    document.documentElement.dataset.open = isOpen + "";
  }, [isOpen]);

  const getLinks = (className: string) => {
    return (
      <div className={className}>
        <Link to="/" onClick={closeFullscreenNavbar}>
          <div className={location == "/" ? "current" : ""}>Character</div>
        </Link>
        <Link to="/quests" onClick={closeFullscreenNavbar}>
          <div className={location == "/quests" ? "current" : ""}>Quests</div>
        </Link>
        <Link to="/backstory" onClick={closeFullscreenNavbar}>
          <div className={location == "/backstory" ? "current" : ""}>
            Backstory
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="navbar">
      {isDesktop ? (
        getLinks("links")
      ) : (
        <div>
          <div className="burger-container">
            <div
              className="burger-icon"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <MenuIcon fontSize="large" />
            </div>
          </div>
          {isOpen ? (
            <div className="links-fullscreen">
              <Stack>{getLinks("")}</Stack>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
