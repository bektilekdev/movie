import React from "react";
import "./home.scss";
import HomePopular from "../../Page/HomePopular";
const Home = () => {
    
  return (
    <div id="home">
      <div className="home">
        <div className="home_nav">
          <h1>Добро пожаловать</h1>
          <p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
          <input type="text" placeholder="Найти фильмь,сериал,персону..." />
          <button>Search</button>
        </div>
      </div>
      <HomePopular/>
    </div>
  );
};

export default Home;
