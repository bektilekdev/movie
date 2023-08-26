import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API/API";
import "./popular.scss";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  // const [next, setNext] = useState(1);
  const { language } = useContext(LanguageContext);
  const { dark } = useContext(LanguageContext);

  function getPopular(key) {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=1}`
    ).then((res) => {
      console.log(res.data.results);
      setPopular(res.data.results);
    });
  }
  // https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1

  useEffect(() => {
    getPopular(API_KEY);
  }, [language]);

  return (
    <div
      id="block"
      style={{
        background: dark ? "black" : "white",
      }}
    >
      {popular.map((el) => (
        <div className="top_block">
          <Link to={`/movie-details/${el.id}`}>
            <img
              className="top_img"
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`}
              alt="img"
            />
          </Link>

          <p className="top_title">{el.title}</p>
          <p className="top_data"> {el.release_date}</p>
        </div>
      ))}

      {/* <button onClick={() => setNext(next + 1)}>next</button> */}
    </div>
  );
};

export default Popular;

// https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1
