import React, {useEffect, useState} from 'react';

import css from './PosterPreview.module.css'
import {axiosService} from "../../services";
import Reviews from "../Reviews/Reviews";

const PosterPreview = ({oneMovie}) => {

    const [reviews, setReviews] = useState([]);

    const {
        id,
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


    useEffect(() => {

        axiosService.get(`/movie/${id}/reviews`).then(({data}) => setReviews(data.results))

    }, [id])


    return (
        <div className={css.MainCard}>
            <div className={css.CardBlock}>

                <div className={css.ImgBlock}>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                         alt={original_title}/>
                </div>

                <div className={css.TextBlock}>
                    <h1>{original_title}</h1>
                    <p>Original language: {original_language}</p>
                    <p>Budget: {budget}</p>
                    <p>Genres: {genres[0].name}</p>
                    <p>Runtime: {runtime}</p>
                    <p>Production countries: {production_countries[0].name}</p>
                    <p>Revenue: {revenue}</p>
                    <p>Spoken languages: {spoken_languages[0].name}</p>
                    <p>Tagline: {tagline}</p>
                    <p>Overview: {overview}</p>
                    <p>Popularity: {popularity}</p>
                    <p>Status: {status}</p>
                    <p>Release date: {release_date}</p>
                    <p>Vote average: {vote_average}</p>
                    <p>Vote count: {vote_count}</p>
                </div>


            </div>

            <h2>Comments:</h2>

            {reviews.map(review => <Reviews key={review.id} review={review}/>)}

        </div>

    );
};

export default PosterPreview;