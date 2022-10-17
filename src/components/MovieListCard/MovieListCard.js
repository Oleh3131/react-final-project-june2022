import React, {useEffect} from 'react';
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

const MovieListCard = () => {

    const {id} = useParams();

    const {oneMovie} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(movieActions.getById({id}))

    },[id])

    return (
        <div>
            {oneMovie&&(
                <div>
                    <h4>{oneMovie.original_title}</h4>
                    <img src={`https://image.tmdb.org/t/p/w200${oneMovie.poster_path}`} alt={oneMovie.original_title}/>
                    <h4>{oneMovie.budget}</h4>
                    <p>{oneMovie.overview}</p>
                </div>
            )}
        </div>
    );
};

export default MovieListCard;