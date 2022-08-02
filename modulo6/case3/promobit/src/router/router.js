import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieFeed from "../pages/Movies/MovieFeed";
import MovieDetail from "../pages/MoviesDetails/MovieDetail";



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieFeed/>}/>
            <Route path="/movie/:id"element={<MovieDetail/>}/>
        </Routes>
    )
};

export default Router;