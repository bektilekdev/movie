import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API/API";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../../context";


const Search = () => {
  const [ser, setser] = useState([]);
  const { movieName } = useParams();
  const {language} = useContext(LanguageContext)


  const getSer = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${language}&query=${movieName}`
    ).then((res) => setser(res.data.results));
  };
  useEffect(() => {
    getSer(API_KEY);
  }, [ser]);

  return (
    <div id="block">
      {ser.map((el) => (
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
    </div>
  );
};

export default Search;
