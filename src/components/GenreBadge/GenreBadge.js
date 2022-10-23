import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {StarsRating} from "../StarsRating/StarsRating";
import css from './GenreBadge.module.css'
import {genreAction} from "../../redux";


const GenreBadge = ({movie,nameOfGenre}) => {

    const navigate = useNavigate();

    const {averageScore} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    const {id,title,poster_path,vote_average} = movie;

    useEffect(()=>{

        dispatch(genreAction.setAverage(vote_average));

    },[averageScore])

    return (
        <div className={css.GenreMainCard}>
            <div className={css.GenreCardContent} onClick={()=>navigate(`/genres/${id}/details`,{state: {movie}})}>
                <div className={css.GenreBadge}>
                    <h4>{nameOfGenre}</h4>
                </div>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
            </div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export default GenreBadge;

