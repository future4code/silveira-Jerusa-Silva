import React from "react";
import styled from "styled-components";
import Lista from "./components/Lista";
import Inputs from "./components/Inputs";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
` 


export default class App extends React.Component {
  state = {
    pagina: true,
  };

  onChangePagina = () => {
    this.setState({ pagina: !this.state.pagina });
  };

  render() {
    return (
      <MainContainer>
        
        <button onClick={this.onChangePagina}> Trocar de tela </button>
        <hr />
        { this.state.pagina === true ? <Inputs/> :  <Lista/> }

      </MainContainer>
    );
  }
}