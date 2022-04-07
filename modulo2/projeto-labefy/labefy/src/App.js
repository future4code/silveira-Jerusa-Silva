import React from 'react';
import Playlists from './components/Playlists';
import Styled from 'styled-components'
import AdicionarMusicas from './components/AdicionarMusicas'
import Header from './components/Header'





export default class App extends React.Component{
  state ={
    mudarTela: "mostrarPlaylists",
  }

  mudaTela =() => {
    this.setState({mudarTela: !this.state.mudarTela});
  }

  render() {
    const mudancaDeTela = () => {
      if (this.state.mudarTela === "mostrarPlaylists"){
        return <Playlists />
      } else if (this.state.mudarTela === "mostrarAddMusicas"){
        return <adicionarMusicas />
      }
    }
        return (
          <div>
            
            {mudancaDeTela()}
          </div>
        );
  }
};
