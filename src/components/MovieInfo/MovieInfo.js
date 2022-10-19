import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {StarsRating} from "../StarsRating/StarsRating";
import {movieActions} from "../../redux";



const MovieInfo = ({movie}) => {

    const {id,title,poster_path,vote_average} = movie;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(movieActions.setAverage(vote_average))

    },[])
    
    return (
        <div>
            <div onClick={()=>navigate(`/movies/${id}`)}>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
            </div>
            <StarsRating vote_average={vote_average}/>
        </div>

    );
};

export default MovieInfo;