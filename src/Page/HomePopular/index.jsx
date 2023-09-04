import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context";
import axios from "axios";
import { API_KEY } from "../../API/API";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomePopular = () => {
  const [top, setTop] = useState([]);
  const [next, setNext] = useState(1);
  const { language } = useContext(LanguageContext);

  function getTop(key) {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${next}`
    ).then((res) => {
      console.log(res.data.results);
      setTop(res.data.results);
    });
  }
  useEffect(() => {
    getTop(API_KEY);
  }, [next, language]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div id="block">
        <Slider {...settings} />
        {top.map((el) => (
          <div className="top_block">
            <Link to={`/movie-details/${el.id}`}>
              <img
                className="top_img"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                alt="img"
              />
            </Link>

            <p className="top_title">{el.title}</p>
            <p className="top_data">{el.release_date}</p>
          </div>
        ))}
        <Slider />
      </div>
    </>
  );
};

export default HomePopular;
