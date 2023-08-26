import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/API";
import ActorMovie from "../ActorMovie/ActorMovie";
import { LanguageContext } from '../../context';

const DetailsActor = () => {
    const [detailsActor,setDetailsActor] = useState({})
    const {actorId} = useParams()
    const {language} = useContext(LanguageContext)

    const getDetailsActor = () =>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=${language}`)
            .then(res => setDetailsActor(res.data))
    }

    useEffect(()=>{
        getDetailsActor()
    },[language])


    return (
            <div id='actors-info'>
                <div className="container">
                    <div className="actors-info">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detailsActor.profile_path}`} alt=""/>
                        <div className='actors-info--title'>
                            <h1>{detailsActor.name}</h1>
                            <h3>Биография</h3>
                            <p>{detailsActor.biography}</p>
                        </div>
                    </div>
                    <ActorMovie/>
                </div>
            </div>
    );
};

export default DetailsActor ;

// https://www.themoviedb.org/t/p/w600_and_h900_bestv2

//https://api.themoviedb.org/3/person/$%7BmovieId%7D?api_key=$%7BAPIKEY%7D&language=en-US