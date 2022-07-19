import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import HomePage from "../pages/Home/HomePage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Router;