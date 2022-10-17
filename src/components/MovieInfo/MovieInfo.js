import React from 'react';
import {useNavigate} from "react-router-dom";

const MovieInfo = ({movie}) => {

    const {id,title,poster_path,vote_average} = movie;

    const navigate = useNavigate();
    
    return (
        <div onClick={()=>navigate(`/movies/${id}`)}>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
            <h4>{vote_average}</h4>
        </div>
    );
};

export default MovieInfo;