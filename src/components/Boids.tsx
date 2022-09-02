import "../styles/Boids.css";
import BoidsDrawer from "../classes/boidsDrawer.js";
import { useEffect, useRef } from "react";

const Boids = () => {
  const canvasRef = useRef(null);
  const bDrawer = new BoidsDrawer(
    60,
    250,
    window.innerWidth,
    window.innerHeight,
    canvasRef.current
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    bDrawer.setCanvasRef(canvas);
    bDrawer.setCanvasDims(window.innerWidth, window.innerHeight);
    bDrawer.run();
    return () => {
      bDrawer.stop();
    };
  }, []);

  const updateCanvasDims = () => {
    bDrawer.setCanvasDims(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("load", () => {
    bDrawer.run();
  });

  document.documentElement.dataset.boids = "true";

  useEffect(() => {
    window.addEventListener("resize", updateCanvasDims);
    return () => window.removeEventListener("resize", updateCanvasDims);
  });

  return (
    <div className="boid-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Boids;
