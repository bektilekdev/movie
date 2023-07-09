import React, {useEffect, useState} from 'react';
import './index.scss'
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/API";
import Actors from "../Actors/actors";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const PageDetails = () => {
    const {movieId} = useParams()
    console.log(movieId)
    const [details,setDetails] = useState([])

    const getDetails = () => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(res => setDetails(res.data))
    }
    useEffect(()=>{
        getDetails(API_KEY)
    },[])
    console.log(details)
    const {runtime,vote_average,tagline,overview} = details
    return (
        <>
            <div id='details' style={{

                background:`url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path}') no-repeat left/cover`,
                height:'86vh',
                objectFit:'cover'

            }}>
                <div className="container">
                    <div className="details">
                      <img style={{
                          width: '300px',
                          height: '450px'}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}  alt=""/>
                           <div className='details--title'>
                               <h1 style={{
                                   margin:'0',
                                   color:'white'
                               }}>{details.title}</h1>
                               <div className='details--group'>
                                   <p style={{
                                       margin:'0'
                                   }}>{details.release_date}</p>
                                   <h4 style={{
                                       margin:'0'
                                   }}>{Math.floor(runtime / 60)}h {Math.floor(runtime % 60 )}m</h4>
                                    <div style={{
                                        margin:'0'
                                    }} className='details--group__genres'>{details.genres?.map(el => <p>{el.name}</p>)}</div>
                               </div>
                               <div className='details--block'>
                                   <div className='details--block__krug'>
                                       <h3>{Math.round(vote_average * 10)} <sup>%</sup></h3>
                                   </div>
                                   <h4>Рейтинг</h4>
                                   <div className='details--block__icon1' ><FormatListBulletedIcon/></div>
                                   <div className='details--block__icon1' ><FavoriteRoundedIcon/></div>
                                   <div className='details--block__icon1' ><BookmarkIcon/></div>
                                   <div className='details--block__icon1' ><StarIcon/></div>
                                   <p></p>
                               </div>
                               <div>
                                   <i><h5>'{tagline}'</h5></i>
                                   <h3  style={{color:'white'}}>Обзор</h3>
                                   <p>{overview}</p>
                               </div>
                           </div>
                    </div>
                </div>
            </div>
            <Actors/>
        </>
    );
};

export default PageDetails;










//
// >
// <div id="detail" style={{
//     background:  url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}") no-repeat left/cover,
//         height:'100vh',
//         objectFit:'cover'
// }}>
// <div className="container">
//     <div className="detail">
//     <img src={https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}} width={340} alt="img"/>
//         <div className="detail--block">
//             <h1>{detail.title}</h1>
//             <div className="detail--block__group" style={{display:'flex'}}>
//                 <p>{detail.release_date}/</p>
//                 <div>{detail.genres?.map(el => <p>{el.name},</p>)}</div>
//                 <p>{Math.floor(detail.runtime / 60)}h {Math.floor(detail.runtime % 60)}m</p>
//             </div>
//             <div className="detail--block__reiting">
//                 <div className="detail--block__reiting--krug" style={res}>
//                     <h5 className="detail--block__reiting--krug__h5">{progressValue}<sup>%</sup></h5>
//                 </div>
//                 <h3>Рейтинг</h3>
//                 <div className="detail--block__reiting--krug__icon"><ListIcon/> </div>
//                 <div className="detail--block__reiting--krug__icon" onClick={()=> setClick(!click)} style={{
//                     color : click ? "red" : ""
//                 }}><FavoriteSharpIcon/> </div>
//                 <div className="detail--block__reiting--krug__icon" onClick={()=> setClick1(!click1)} style={{
//                     color : click1 ? "#F3CD03" : ""
//                 }}><BookmarkSharpIcon/></div>
//                 <div className="detail--block__reiting--krug__icon"><StarRateSharpIcon/></div>
//             </div>
//             <div className="detail--block__info">
//                 <h3>" {detail.tagline}"</h3>
//                 <h1>Обзор</h1>
//                 <h2>{detail.overview}</h2>
//             </div>
//
//         </div>
//
// </div>
// </div>
// </div>
// <Actors/>
// </>