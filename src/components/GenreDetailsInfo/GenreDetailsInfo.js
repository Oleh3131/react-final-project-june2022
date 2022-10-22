import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

import css from './GenreDetailsInfo.module.css'


const GenreDetailsInfo = () => {

    const {state} = useLocation();

    const {
        original_title,
        poster_path,
        overview,
        original_language,
        popularity,
        release_date,
        vote_average,
        vote_count
    } = state.movie;


    return (
        <div className={css.CardBlock}>

            <div className={css.ImgBlock}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}/>
            </div>

            <div className={css.TextBlock}>
                <h1>{original_title}</h1>
                <p>Original language: {original_language}</p>
                <p>Overview: {overview}</p>
                <p>Popularity: {popularity}</p>
                <p>Release date: {release_date}</p>
                <p>Vote average: {vote_average}</p>
                <p>Vote count: {vote_count}</p>
            </div>

        </div>
    );
};

export default GenreDetailsInfo;




