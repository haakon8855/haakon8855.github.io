import "../styles/Home.css";
import Character from "./Character";
import { scroller, Element } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BoidsDrawer from "../classes/boidsDrawer";

const Home = () => {
  document.documentElement.dataset.boids = "false";
  const canvasRef = useRef(null);
  const bDrawer = new BoidsDrawer(
    60,
    250,
    window.innerWidth,
    window.innerHeight - 58,
    canvasRef.current
  );
  const [isSmall, setIsSmall] = useState(window.innerWidth >= 500);

  useEffect(() => {
    const canvas = canvasRef.current;
    bDrawer.setCanvasRef(canvas);
    bDrawer.setCanvasDims(window.innerWidth, window.innerHeight - 58);
    bDrawer.run();
    return () => {
      bDrawer.stop();
    };
  }, []);

  const updateCanvasDims = () => {
    const canvas = canvasRef.current;
    bDrawer.setCanvasRef(canvas);
    console.log("hei");
    if (canvas) {
      const canvasElem = canvas as HTMLCanvasElement;
      canvasElem.dataset.testing = "true";
      canvasElem.width = window.innerWidth;
      canvasElem.height = window.innerHeight;
      canvasElem.dataset.testing = "false";
    }
  };

  window.addEventListener("load", () => {
    bDrawer.run();
  });

  useEffect(() => {
    window.addEventListener("resize", updateCanvasDims);
    return () => window.removeEventListener("resize", updateCanvasDims);
  });

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
      <Navbar />
      <div className="home">
        <canvas ref={canvasRef} className="boids-canvas"></canvas>
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
      <Footer />
    </div>
  );
};

export default Home;
