import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    width: 80vw;
    margin: 20px 5 10px 60px;
    justify-content: center;
    align-items: center;  
    border-style: outset;
    font-family: 'Times New Roman', Times, serif;
    
    
    
`
const BackgroundCard = styled.div`
    background-color: white;
    display: flex;
    width: 100vw;
    height: 20vh;
    margin: 5px 0 3px 15px;
    justify-content: center;
    align-items: center; 
    
      
`

const Botao = styled.button`
    background-color: #A2CD5A;
    margin: 0 2px;
    
    
`



const CardPlaylist = (props) => {
        return(
                <BackgroundCard key={props.playlistId}>
                    <CardDiv >
                            <h3>{props.name}</h3>
                            <Botao onClick={() => {props.mudarPagina("tracklistDaPlaylist", props.playlistId)}}>Ver</Botao>
                            <Botao onClick={() => {props.deletarPlaylist(props.playlistId)}}>Deletar playlist</Botao>                                         
                    
                    </CardDiv>
                </BackgroundCard>
        )
    }
export default CardPlaylist