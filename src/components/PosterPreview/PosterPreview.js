import React from 'react';

import css from './PosterPreview.module.css'

const PosterPreview = ({oneMovie}) => {

        const {
                original_title,
                poster_path,
                budget,
                overview,
                genres,
                original_language,
                popularity,
                production_countries,
                release_date,
                revenue,
                runtime,
                spoken_languages,
                status,
                tagline,
                vote_average,
                vote_count
        } = oneMovie;


    return (
        <div className={css.CardBlock}>
            <h4>Title: {original_title}</h4>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={original_title}/>
            <h4>Budget: {budget}</h4>
            <p>Overview: {overview}</p>
            <p>Genres: {genres.name}</p>
            <p>Original language: {original_language}</p>
            <p>Popularity: {popularity}</p>
            <p>Production countries: {production_countries[0].name}</p>
            <p>Release date: {release_date}</p>
            <p>Revenue: {revenue}</p>
            <p>Runtime: {runtime}</p>
            <p>Spoken languages: {spoken_languages[0].name}</p>
            <p>Status: {status}</p>
            <p>Tagline: {tagline}</p>
            <p>Vote average: {vote_average}</p>
            <p>Vote count: {vote_count}</p>
        </div>
    );
};

export default PosterPreview;