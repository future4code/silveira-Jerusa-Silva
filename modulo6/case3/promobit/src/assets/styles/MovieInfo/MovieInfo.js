import styled from "styled-components";

export const FeedButton = styled.button`
    display: flex;
    align-items: center;
    position: fixed;
    height: 5vh;
    top: 0;
    right: 0;
    margin:2vh 2vw 0 0;
    border: none;
    background-color: transparent;
    z-index: 200;
    cursor: pointer;
    img{
        height: 100%;
    }
`;
export const MovieInfos = styled.div`
    height: fit-content;
    padding-top: 10vh;
    background-color: #2D0C5E;
    @media screen and (max-width: 750px){
        height: fit-content;
    }
`;
export const InfoCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 4% 0 0 4%;
    gap: 5%;
    @media screen and (max-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0;
        gap: 0;
    }
`;
export const Poster = styled.div`
    height: 65vh;
    img{
        height: 110%;
        width: 18rem;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
    }
    @media screen and (max-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 80vw;
        padding: 5%;
        img{
            height: 100%;
            width: 15rem;
            margin-top: 10%;
        }
    }
`;
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 80vw;
        padding: 5%;
    }
`;
export const HeadInfo = styled.div`
    width: 80%;
    h1{
        font-weight: 700;
        font-size: 2rem;
        color: #fff;
    }
    p{
        font-weight: 400;
        font-size: 0.9rem;
        color: #fff;
        margin-top: 5%;
    }
    span{
        margin-right: 1%;
        padding: 1%;
        border-radius: 10px;
        font-size: 0.9rem;
        font-weight: 900;
        background-color: #f29807;
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        h1{
            font-size: 1.3rem;
        }
        p{
            font-size: 0.8rem;
            margin-top: 10%;
        }
        span{
            font-size: 0.8rem;
            border-radius: 5px;
        }
    }
`;
export const MovieGenre = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 18px;
    p{
        font-weight: 300;
        font-size: 0.8rem;
        margin: 0;
    }
    @media screen and (max-width: 750px) {
        display: block;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
        p{
            font-size: 0.7rem;
            margin-top: 5%;
        }
    }
`;
export const Overview = styled.div`
    width: 90%;
    h2{
        font-weight: 700;
        font-size: 1.3rem;
        color: #fff;
    }
    p{
        font-weight: 300;
        font-size: 0.9rem;
        width: 90%;
        color: #fff;
    }
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        p{
            font-size: 0.9rem;
            text-align: justify; 
            width: 100%;
        }
    }
`;