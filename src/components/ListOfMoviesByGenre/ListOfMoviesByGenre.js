import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {movieService} from "../../services";


const ListOfMoviesByGenre = () => {

    const [movies, setMovies] = useState([]);

    const {state} = useLocation();

    const {id} = useParams();

    useEffect(() => {

        movieService.getAllMovieByGenres(`${id}`).then(({data}) => setMovies(data.results))

    }, [id])

    let nameOfGenre='';

    for (const movie of movies) {

        if (movie.genre_ids.includes(state.genre.id)) {

            nameOfGenre = state.genre.name;

        }
    }
    return (
        <div>
            {movies.map(movie => <div key={movie.id}><h4>{movie.original_title}</h4> <h4>{nameOfGenre}</h4></div>)}
        </div>
    );
};

export default ListOfMoviesByGenre;