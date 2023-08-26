import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../API/API";
import Actors from "../Actors/actors";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import StarIcon from "@mui/icons-material/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { LanguageContext } from "../../context";
const PageDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [details, setDetails] = useState([]);
  const { language } = useContext(LanguageContext);
    
  const getDetails = () => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${language}`
    ).then((res) => setDetails(res.data));
  };
  useEffect(() => {
    getDetails(API_KEY);
  }, [language]);
  console.log(details);
  const { runtime, vote_average, tagline, overview } = details;
  return (
    <>
      <div
        id="details"
        style={{
          background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path}') no-repeat left/cover`,
          height: "95vh",
          objectFit: "cover",
        }}
      >
        <div className="container">
          <div className="details">
            <img
              style={{
                width: "500px",
                height: "700px",
              }}
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
              alt=""
            />
            <div className="details--title">
              <h1
                style={{
                  margin: "0",
                  color: "white",
                }}
              >
                {details.title}
              </h1>
              <div className="details--group">
                <p
                  style={{
                    margin: "0",
                  }}
                >
                  {details.release_date}
                </p>
                <h4
                  style={{
                    margin: "0",
                  }}
                >
                  {Math.floor(runtime / 60)}h {Math.floor(runtime % 60)}m
                </h4>
                <div
                  style={{
                    margin: "0",
                  }}
                  className="details--group__genres"
                >
                  {details.genres?.map((el) => (
                    <p>{el.name}</p>
                  ))}
                </div>
              </div>
              <div className="details--block">
                <div className="details--block__krug">
                  <h3>
                    {Math.round(vote_average * 10)} <sup>%</sup>
                  </h3>
                </div>
                <h4>Рейтинг</h4>
                <div className="details--block__icon1">
                  <FormatListBulletedIcon />
                </div>
                <div className="details--block__icon1">
                  <FavoriteRoundedIcon />
                </div>
                <div className="details--block__icon1">
                  <BookmarkIcon />
                </div>
                <div className="details--block__icon1">
                  <StarIcon />
                </div>
                <p></p>
              </div>
              <div>
                <i>
                  <h5>'{tagline}'</h5>
                </i>
                <h3 style={{ color: "white" }}>Обзор</h3>
                <p>{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors />
    </>
  );
};

export default PageDetails;
