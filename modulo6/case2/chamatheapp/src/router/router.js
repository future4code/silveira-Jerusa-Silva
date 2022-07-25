import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SearchHistoryPage from "../pages/SearchHistoryPage/SearchHistoryPage";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/search/history"element={<SearchHistoryPage/>}/>
        </Routes>
    )
};

export default Router;