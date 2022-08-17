import "../styles/Home.css";
import Character from "./Character";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="greeting">
          <h1>Hello there!</h1>
          <h1>I'm Håkon</h1>
        </div>
        <Character />
      </div>
    </div>
  );
};

export default Home;
