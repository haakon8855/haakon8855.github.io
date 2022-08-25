import "../styles/Home.css";
import Character from "./Character";
import { scroller, Element } from "react-scroll";
import { useEffect, useState } from "react";

const Home = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth >= 500);

  const updateIsSmall = () => {
    setIsSmall(window.innerWidth >= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateIsSmall);
    return () => window.removeEventListener("resize", updateIsSmall);
  });

  const scrollToInventory = () => {
    scroller.scrollTo("character-info", {
      duration: 500,
      offset: -58,
      smooth: true,
    });
  };

  return (
    <div>
      <div className="home">
        <div className="greeting">
          <h1>Hello there!</h1>
          <h1>I'm Håkon</h1>
          <h3>
            I'm a Computer Science masters student {isSmall ? <br /> : ""}
            specialising in Artficial Intelligence
          </h3>
          <button className="character-info-button" onClick={scrollToInventory}>
            <div className="character-info-button-text">Character Info</div>
          </button>
        </div>
        <Element name="character-info">
          <Character />
        </Element>
      </div>
    </div>
  );
};

export default Home;
