import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API/API";

const ActorMovie = () => {
    const [actorMovie,setActorMovie] = useState({})
    const {actorId} = useParams()

    const  getActorMovie = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${key}&language=en-US`)
            .then(res => setActorMovie(res.data))
    }
    console.log(actorMovie)
    useEffect(()=>{
        getActorMovie(API_KEY)
    },[])


    return (
        <div id='actor-movie'>
            <div className="actor-movie">
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${actorMovie.backdrop_path }`} alt=""/>
            </div>
        </div>
    );
};

export default ActorMovie;