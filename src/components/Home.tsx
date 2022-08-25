import "../styles/Home.css";
import Character from "./Character";
import { scroller, Element } from "react-scroll";

const Home = () => {
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
