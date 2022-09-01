import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Quests from "./components/Quests";
import Backstory from "./components/Backstory";
import Footer from "./components/Footer";
import Boids from "./components/Boids";
import { useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/backstory" element={<Backstory />} />
        <Route path="/boids" element={<Boids />} />
      </Routes>
    </div>
  );
};

export default App;
