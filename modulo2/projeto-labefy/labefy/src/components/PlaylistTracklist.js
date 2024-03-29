import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardTracklist from './CardTracklist';

const Box = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin: 50px;
    justify-content: space-between;
`
const DivInputs = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 60vh;
    margin-left: 3px;
    justify-content: center;
    padding-bottom: 40px;
    font-family: 'Times New Roman', Times, serif;
`
const BoxAddTrack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`
const BotaoDiv = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background-color: #A2CD5A;
`

const Botao = styled.button`
    background-color: #A2CD5A;
    /* border-radius: 1px; */
`


export default class PlaylistTracklist extends React.Component {
    state = {
        tracklist: [],
        nomeMusica: "",
        nomeArtista: "",
        linkMusica: ""    
      }


    componentDidMount = () => {
        this.mostrarTracklist()
    }

    onChangeNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    };

    onChangeNomeArtista = (event) => {
        this.setState({ nomeArtista: event.target.value })
    };

    onChangeLinkMusica = (event) => {
        this.setState({ linkMusica: event.target.value })
    };

    mostrarTracklist = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`,
        {
            headers: {
                Authorization: 'jerusa-silva-silveira'
            }
        } )
        .then((resposta) => {
            this.setState({ tracklist: resposta.data.result.tracks });
            console.log(resposta)
        })
        .catch((erro) => {
            console.log(erro.message)
        })
    };

    deletarMusica = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${id}`,
        {
            headers: {
                Authorization: 'jerusa-silva-silveira'
            }
        })
        .then((resposta) => {
            this.mostrarTracklist()
            alert('Música deletada com sucesso')
        })
        .catch((erro) => {
            console.log(erro.message);

        })
    };

    adicionarMusicaNaPlaylist = () => {
        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.linkMusica
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`, body,
        {
            headers: {
                Authorization: 'jerusa-silva-silveira'
            }
        })
        .then((resposta) => {
            this.setState({ nomeMusica: ""  });
            this.setState({ nomeArtista: ""  });
            this.setState({ linkMusica: ""  });
            this.mostrarTracklist();
            alert('Música adicionada com sucesso!')
        })
        .catch((erro) => {
            console.log(erro.message);
            alert('Não foi possível adicionar a música')
        })
    }

    render() {

        const Tracklist = this.state.tracklist.map((tracklist) => {
            return (
                <CardTracklist 
                key={tracklist.id}
                name={tracklist.name}
                artist={tracklist.artist}
                url={tracklist.url}
                tracklistId={tracklist.id}
                deletarMusica={this.deletarMusica}
                />
            )
    });
        return(
            
            <div>
                
                <Box>
                    <div>
                          {Tracklist}
                          
                    </div>
                    <BoxAddTrack>
                        <DivInputs>
                            <h3>Adicionar Música</h3>
                            <label><strong>Título</strong></label>
                            <input value={this.state.nomeMusica} onChange={this.onChangeNomeMusica}></input>
                            <label><strong>Artista</strong></label>
                            <input value={this.state.nomeArtista} onChange={this.onChangeNomeArtista}></input>
                            <label><strong>URL:</strong></label>
                            <input value={this.state.linkMusica} onChange={this.onChangeLinkMusica}></input>
                            <br />
                            <Botao onClick={this.adicionarMusicaNaPlaylist}>Adicionar</Botao>
                        </DivInputs>
                        <BotaoDiv>
                            <Botao onClick={() => {this.props.mudarPagina("listaPlaylist", "")}}>Voltar para Lista</Botao>
                        </BotaoDiv>
                        
                    </BoxAddTrack>
                                  
                </Box>
                
            </div>
        )
    }
};
