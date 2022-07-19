import React from "react";
import { useNavigate } from "react-router-dom";
import { PageError } from "../../assets/styles/ErrorPage/ErrorStyle";

const ErrorPage = () => {
    
    const navigate = useNavigate();
    
    return (
        <PageError>
            <div>
                <h1><span>Ops,</span> não encontramos esse caminho!</h1>
                <button onClick={() => navigate("/")}>Loterias</button>
            </div>
        </PageError>
    )
};

export default ErrorPage;