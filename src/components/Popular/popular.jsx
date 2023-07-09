import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/API";
import './popular.scss'
import {Link} from "react-router-dom";


// https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1
const Popular = () => {
    const [popular,setPopular] = useState([])
    function getPopular(key){
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((res)=>{
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[])
    return (
        <div className='container'>
           <div className="bloc">
               {popular.map((el)=>(
                   <div className='block'>
                       <Link to={`/movie-details/${el.id}`}>
                           <img className='popular_img' src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt="img"/>
                       </Link>
                       <p className='popular_title'>{el.title}</p>
                       <p className='popular_data'> {el.release_date}</p>
                   </div>
               ))}
           </div>
        </div>
    );
};

export default Popular;

