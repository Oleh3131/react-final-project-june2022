import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import MovieInfo from "../MovieInfo/MovieInfo";
import FormFilter from "../FormFilter/FormFilter";
import css from './MoviesList.module.css'


const MoviesList = () => {

    const {movies, loading, error, pageNumber} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});


    const query = searchParams.get('query') || '';

    const page = searchParams.get('page');

    const [currentPage, setCurrentPage] = useState(null);

    useEffect(() => {

        if (query) {

            dispatch(movieActions.search({query}));

        } else if (searchParams => "1" && searchParams <= "500") {


            dispatch(movieActions.getAll({page}))

            setCurrentPage(pageNumber);

        }

    }, [query, searchParams, currentPage])


    const prevPage = () => {

        setSearchParams(value => ({page: value.get('page') - 1}))

    }

    const nextPage = () => {

        setSearchParams(value => ({page: +value.get('page') + 1}))

    }

    return (
        <div className={css.MainMovieBlock}>

            <FormFilter setSearchParams={setSearchParams} query={query}/>


            <div className={css.MovieListWithButtons}>

                <div className={css.MovieCardList}>
                    {loading && <h1>Loading...</h1>}
                    {error && <h1>Error!.</h1>}
                    {movies.map(movie => <MovieInfo key={movie.id} movie={movie}/>)}
                </div>

                <div className={css.ButtonBlock}>
                    <button disabled={page === '1'} onClick={prevPage}
                            className={css.PreviousButton}>Previous page
                    </button>
                    <button disabled={page === '500'} onClick={nextPage}
                            className={css.NextButton}>Next page
                    </button>
                </div>

            </div>


        </div>
    );
};

export default MoviesList;