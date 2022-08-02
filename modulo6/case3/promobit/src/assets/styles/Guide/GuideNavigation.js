import styled from "styled-components";

export const GuideContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: fit-content;
    min-width: 100vw;
    padding-top: 3%;
    margin-bottom: 2%;
    background-color: #2D0C5E;
    h1{
        width: 80%;
        margin: 5% 0 3% 0;
        font-weight: 700;
        font-size: 3em;
        line-height: 56px;
        text-align: center;
        letter-spacing: -0.005em;
        color: #FFFFFF;
    }
    @media screen and (max-width: 750px){
        display: flex;
        align-items: flex-start;
        margin-bottom: 10%;
        h1{
            text-align: left;    
            font-weight: 700;
            font-size: 1.18rem;
            line-height: 28px;
            width: 60%;
            margin: 20% 0 10% 0;
            color: #fff;
            padding-left: 6%;
        }
    }
`;
export const FilterGuide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    h2{
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
    @media screen and (max-width: 750px){
        display: flex;
        align-items: flex-start;
        width: 100%;
        h2{
            padding-left: 6%;
        }
    }
`;
export const GenreNavigation = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 3%;
    gap: 10px;
    button{
        margin: 1%;
        height: 40px;
        width: 100%;
        border: none;
        border-radius: 5px;
        font-family: "Roboto";
        font-size: 12px;
        font-weight: 700;
        background-color: #fff;
        color: #323232;
        cursor: pointer;
    }
    button:hover{
        color: #fff;
        background-color: #f29807;
    }
    @media screen and (max-width: 750px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        width: 90%;
        gap: 8px;
        margin-bottom: 5%;
        padding-left: 6%;
        button{
            height: 40px;
            width: 80%;
            font-size: 10px;
        }
    }
`;