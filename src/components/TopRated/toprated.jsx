import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/API";
import './toprated.scss'

const Toprated = () => {
    const [top,setTop] = useState([])

    function getTop (key){
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
            .then((res)=>{
                console.log(res.data.results)
                setTop(res.data.results)
            })
    }
    useEffect(()=>{
        getTop(API_KEY)
    },[])
    return (
        <div>
            <div id='block'>
                {
                    top.map((el)=>(
                        <div className='top_block'>
                            <img className='top_img' src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                            <p className='top_title'>{el.title}</p>
                            <p className='top_data'>{el.release_date}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Toprated;

