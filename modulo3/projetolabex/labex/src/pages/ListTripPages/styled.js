import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`


export const MainPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 16%;
    padding-bottom: 13%;
    font-size: 19px;
    background-color:  #000039;
    color: #9E9E9E;
    
   
`

export const Botoes = styled.button`
        border-radius: 20px black;
        box-shadow: 2px 2px 14px rgba(85, 83, 230, 1);
        width: 100px;
        border-radius: 5px;
        margin-top: 30px;
        color: #424242;
        font-family: Arial, sans-serif;
        
       
        
`

export const DivDaLista = styled.div`
    display: flex;
    list-style: none;
    width: 100%;
    flex-direction: column-reverse;
`

export const DivList = styled.div`
    display: flex;
    list-style: none;
    line-break: 24px;
    justify-items: 10px;
    width: 100%;
    flex-direction: column;
    margin-right: 50px;
    justify-content: space-between;
    margin-top: 50px;
`

export const StyloLista = styled.div`
        box-shadow:0px 2px 2px 0px;
        background-color: transparent;
        border-radius: 5px;
        margin-right: 50px;
`