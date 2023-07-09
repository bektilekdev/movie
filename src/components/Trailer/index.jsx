import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/API";
import {useParams} from "react-router-dom";

const Trailer = () => {
    const [trailer,setTrailer] = useState([])
    const {actorId} = useParams()
    const getTrailer = () =>{
        axios(`//https://api.themoviedb.org/3/search/movie?api_key=${actorId}&query=${API_KEY}`)
            .then(res => setTrailer(res.data))
    }
    useEffect(()=>{
        getTrailer(API_KEY)
    },[])
    console.log(trailer)
    return (
        <div id='trailer'>
            <div className="container">
                <div className="trailer">
                    {
                        trailer.map((el)=>(
                            <iframe width="699" height="393" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="Джон Уик 2 — Русский трейлер #2 (Дубляж, 2017)" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;
//https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}