import React from "react";
import { Main, PageWrapper } from "../../assets/styles/HomePage/HomeStyle";
import { Header, SearchHistoryButton } from "../../assets/styles/Headers/HeaderStyle";
import GithubLogo from "../../assets/images/github-logo.png";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import UserCard from "../../components/UserCard/UserCard";
import UserRepo from "../../components/UserRepo/UserRepositories";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <PageWrapper>
            <Header>
                <img src={GithubLogo} alt="Github logo" />
               <SearchComponent/>
               <SearchHistoryButton onClick={() => navigate("/search/history")}>History</SearchHistoryButton>
            </Header>
            <Main>
                <UserCard/>
                <UserRepo/>
            </Main>
        </PageWrapper>
    )
};

export default HomePage;