import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'

const Genre = ({genre}) => {

    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div className={css.GenreCard}>
            <button onClick={() => navigate(`${id}`, {state: {genre}})}>{name}</button>
        </div>
    );
};

export default Genre;