import React, { useContext, useState } from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { LanguageContext } from "../../context";

const Header = () => {
  const [search, setsearch] = useState("");
  const nav = useNavigate();
  const { language } = useContext(LanguageContext);
  const { setLanguage } = useContext(LanguageContext);
  const { dark } = useContext(LanguageContext);
  const { setDark } = useContext(LanguageContext);

  console.log(search);
  console.log("sdf", language);
  return (
    <div className="header">
      <div className="header_nav">
        <h1>TMDB</h1>
        <div className="line"></div>
      </div>
      <div className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="popular">
          <li>Popular</li>
        </Link>
        <Link to="toprated">
          <li>Toprated</li>
        </Link>
      </div>

      <button onClick={() => setDark(!dark)}>
        {dark ? (
          <LightModeIcon />
        ) : (
          <NightsStayIcon
            style={{
              color: "black",
            }}
          />
        )}
      </button>

      <div className="add">
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="en-US">English</option>
          <option value="ru-RU">Русский</option>
          <option value="fr-FR">France</option>
        </select>

        <input
          type="search"
          placeholder="search"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          value={search}
        />

        <button
          onClick={() => {
            nav(`/movie-search/${search}`);
            setsearch("");
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
