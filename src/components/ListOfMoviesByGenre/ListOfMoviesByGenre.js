import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {movieService} from "../../services";
import GenreBadge from "../GenreBadge/GenreBadge";
import css from './ListOfMoviesByGenre.module.css'


const ListOfMoviesByGenre = () => {

    const [movies, setMovies] = useState([]);

    const {state} = useLocation();

    const {id} = useParams();

    useEffect(() => {

        movieService.getAllMovieByGenres(`${id}`).then(({data}) => setMovies(data.results))

    }, [id])

    let nameOfGenre = '';

    for (const movie of movies) {

        if (movie.genre_ids.includes(state.genre.id)) {

            nameOfGenre = state.genre.name;

        }
    }
    return (
        <div className={css.BadgeCard}>
            {movies.map(movie => <GenreBadge key={movie.id} movie={movie}
                                             nameOfGenre={nameOfGenre}/>)}
        </div>
    );
};

export default ListOfMoviesByGenre;