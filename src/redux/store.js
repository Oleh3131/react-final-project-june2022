import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movie.sclice";
import {genreReducer} from "./slices/genre.slice";

const mainReducer = combineReducers({
    movieReducer,
    genreReducer
});

const setUpStore = () => configureStore({
    reducer: mainReducer
});

export {
    setUpStore
}

