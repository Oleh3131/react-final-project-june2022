import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import Genre from "../Genre/Genre";
import {genreAction} from "../../redux";
import css from './Genres.module.css'


const Genres = () => {

    const {genres, loading, error} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(genreAction.getAll());

    }, [])

    return (
        <div className={css.MainGenreBlock}>

            <div className={css.GenreBlock}>
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error!!!</h1>}
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>

            <hr/>

            <Outlet/>
        </div>
    );
};

export default Genres;