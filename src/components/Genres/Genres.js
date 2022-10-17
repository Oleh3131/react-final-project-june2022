import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Genre from "../Genre/Genre";
import {genreAction} from "../../redux";


const Genres = () => {

    const {genres,loading,error} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(genreAction.getAll());
        
    },[])

    return (
        <div>
            {loading&&<h1>Loading...</h1>}
            {error&&<h1>Error!!!</h1>}
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;