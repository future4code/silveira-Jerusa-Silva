import React from 'react';
import styled from 'styled-components';


const TrackDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    
`
const BackgroundCard = styled.div`
    background-color: white;
    display: flex;
    width: 50rem;
    height: 10rem;
    margin: 10px 0 10px 40px;
    justify-content: center;
    align-items: center;   
    font-family: 'Times New Roman', Times, serif;
    
    
`

const Botao = styled.button`
    background-color: #A2CD5A;
    border-radius: 8px;
    /* color: red; */
    font-weight: bold;
`

const ConteudoDiv = styled.div`
    display: flex;
    width: 40rem;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    font-family: 'Times New Roman', Times, serif;
`

const CardTracklist = (props) => {
        return (
            <BackgroundCard key={props.tracklistId}>
                <ConteudoDiv>
                    <TrackDiv>
                        <p><strong>Título: </strong>{props.name}</p>
                        <p><strong>Artista: </strong>{props.artist}</p>
                        <Botao onClick={() => {props.deletarMusica(props.tracklistId)}}>X Excluir</Botao>
                    </TrackDiv>             
                    <div>
                        <iframe src={props.url}
                        width="300vw"
                        height="80vh"
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media" />
                    </div>                              
                </ConteudoDiv>
            </BackgroundCard>
        )
    }

export default CardTracklist