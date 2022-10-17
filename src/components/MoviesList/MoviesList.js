import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import MovieInfo from "../MovieInfo/MovieInfo";



const MoviesList = () => {

    const {movies,loading,error} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(movieActions.getAll())
        

    },[])

    return (
        <div>
            {loading&&<h1>Loading...</h1>}
            {error&&<h1>Error!.</h1>}
            {movies.map(movie=><MovieInfo key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesList;