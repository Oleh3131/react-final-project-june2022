import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import css from './GenreDetailsInfo.module.css'
import Reviews from "../Reviews/Reviews";
import {axiosService} from "../../services";

const GenreDetailsInfo = () => {

    const {state} = useLocation();

    const [reviews, setReviews] = useState([]);

    const {
        id,
        original_title,
        poster_path,
        overview,
        original_language,
        popularity,
        release_date,
        vote_average,
        vote_count
    } = state.movie;

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
                    <p>Overview: {overview}</p>
                    <p>Popularity: {popularity}</p>
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

export default GenreDetailsInfo;




