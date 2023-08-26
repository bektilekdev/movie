
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { API_KEY } from "../../API/API";
import {Link, useParams} from "react-router-dom";
import Slider from 'react-slick'
const ActorMovie = () => {
    const {movieId} = useParams()
    const { actorId } = useParams();
    const [actorMovie, setActorMovie] = useState([]);

    const getActorMovie = () => {
        axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=en-US`)
            .then(res => setActorMovie(res.data.cast));
    }

    useEffect(() => {
        getActorMovie(API_KEY);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };


    return (
        <div id='actorMovie'>
            <Slider {...settings} className="actorMovie">
                {
                    actorMovie.map(el => (
                        <Link to={`/movie-details/${el.id}`} className="block" key={el.id}>
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} width={150} alt="img" />
                            <h2>{el.title}</h2>
                            <h3>{el.release_date}</h3>
                        </Link>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ActorMovie;
