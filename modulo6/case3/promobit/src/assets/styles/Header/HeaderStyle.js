import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    position:fixed;
    top: 0;
    height: 10vh;
    min-width: 100vw;
    padding-left: 5%;
    background-color: #5C16C5;
    z-index: 100;
    img{
        cursor: pointer;
    }
    @media screen and (max-width: 750px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
    }
`;