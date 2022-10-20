import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MainLayout from "./components/MainLayout/MainLayout";
import Genres from "./components/Genres/Genres";
import MovieListCard from "./components/MovieListCard/MovieListCard";
import ListOfMoviesByGenre from "./components/ListOfMoviesByGenre/ListOfMoviesByGenre";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


const App = () => {
    return (
        <Routes>
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'header'} element={<Header/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:id'} element={<MovieListCard/>}/>
                <Route path={'genres'} element={<Genres/>}>
                    <Route path={':id'} element={<ListOfMoviesByGenre/>}/>
                </Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App}





