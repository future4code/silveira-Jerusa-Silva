import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CriarPlaylistDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    font-family: 'Times New Roman', Times, serif;
`

const BotaoEInput = styled.div`
    display: flex;
    flex-direction: row;
`

const Botao = styled.button`
    background-color: #A2CD5A;
    
`


export default class CriarPlaylist extends React.Component{
    state = {
        criarPlaylistInput: "",
        
    }

    onChangeNamePlaylist = (event) => {
        this.setState({ criarPlaylistInput: event.target.value })
    };

    criarPlaylist = () => {
        const body = {
            name: this.state.criarPlaylistInput
        };

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body,
        {
            headers: {
                Authorization: 'jerusa-silva-silveira'
            }
        })
        .then((response) => {
            this.setState({ criarPlaylistInput: "" });
            alert('Playlist criada com sucesso!')
        })
        .catch((erro) => {
            console.log(erro.message)
            alert('Não foi possível criar a playlist')
        })
    }

    render() {
        return(
            <div>
                <CriarPlaylistDiv>
                    <label>Criar playlist</label>
                    <BotaoEInput>
                        <input value={this.state.criarPlaylistInput} onChange={this.onChangeNamePlaylist}></input>
                        <Botao onClick={this.criarPlaylist}>Criar</Botao>
                    </BotaoEInput>
                </CriarPlaylistDiv>
                
            </div>
        )
    }
}