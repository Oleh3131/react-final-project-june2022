import React, {useEffect} from 'react';
import { useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import css from './MovieListCard.module.css'
import PosterPreview from "../PosterPreview/PosterPreview";


const MovieListCard = () => {

    const {id} = useParams();

    const {oneMovie} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(movieActions.getById({id}))

    },[id])

    return (
        <div>
            {oneMovie&&<PosterPreview oneMovie={oneMovie}/>}
        </div>
    );
};

export default MovieListCard;