import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const MainPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 10%;
    padding-bottom: 15%;
    font-size: 20px;
    text-align: justify;
    line-height: 2em;
    justify-items: center;
    align-items: center;
    background-color: #000039;
    color: black;
    
   
`

export const Botoes = styled.button`
       
        box-shadow: 10px 5px 5px black;
        width: 150px; 
        border-radius: 10px;
        margin-top: 350px;
        text-shadow: 2px 2px 14px rgba(85, 83, 230, 1);
        font-family:Arial, sans-serif;
        `