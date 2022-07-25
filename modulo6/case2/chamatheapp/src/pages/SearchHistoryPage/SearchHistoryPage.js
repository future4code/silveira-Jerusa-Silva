import React, { useContext, useEffect } from "react";
import { Header } from "../../assets/styles/Headers/HeaderStyle";
import GithubLogo from "../../assets/images/github-logo.png";
import { PageWrapper } from "../../assets/styles/HomePage/HomeStyle";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../global/GlobalContext";

const SearchHistoryPage = () => {

    const {history,setHistory} = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        
    });
    return (
        <PageWrapper>
            <Header>
                <img src={GithubLogo} onClick={() => navigate("/")} alt="Github logo" />
            </Header>
        </PageWrapper>
    )
};

export default SearchHistoryPage;