import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/API";
import Slider from "react-slick";
import person1 from '../../img/person1.webp'
import {Link} from "react-router-dom";

const Actors = () => {
    const [actors,setActors] = useState([])
    const {movieId} = useParams()

    function getActors(){
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
            .then((res)=>{
                console.log(res.data)
                setActors(res.data.cast)
            })
    }

    useEffect(()=>{
        getActors()
    },[])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div id='actors'>
            <div className="container">
                <h2>В главных ролях</h2>
                <Slider className="actors" {...settings}>
                        {
                            actors.map(el=>(
                                <div className='actors--blocks'>
                                    <div className='actors--blocks__title'>
                                        <Link to={`/actor-details/${el.id}`}>
                                        {
                                            el.profile_path ?  <img src={`https://image.tmdb.org/t/p/w276_and_h350_face${el.profile_path}`} alt=""/> :
                                                <img src={person1} alt=""/>
                                        }
                                        </Link>
                                        <h1>{el.name}</h1>
                                    </div>
                                </div>
                            ))
                        }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;