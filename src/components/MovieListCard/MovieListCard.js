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
            {oneMovie&&<div>{oneMovie.overview}</div>}
        </div>
    );
};

export default MovieListCard;