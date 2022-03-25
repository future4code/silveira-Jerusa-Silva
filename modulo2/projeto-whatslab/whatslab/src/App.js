import React from 'react';
import './App.css';
import styled from 'styled-components';
import mensagens from './components/mensagens';






export class App extends React.Component {
  state = {
  usuario:"",
  texto:"",
  mensagens:[],

 }
};
onChangeUsuario = (event) => {
  this.setState({
    valueUsuario: event.target.value
  })
}
onChangeTexto = (event) => {
  this.setState({
    valueTexto: event.target.value
  })
};

enviarMensagens = () => {
  const mensagem = {
    usuario: this.state.usuarioValue,
    texto: this.state. textoValue,
  }
  this.props.adicionarMensagem(mensagem)
  this setState ({textoValue: ''})
};

render (){
  return (

  <MensagemFormContainer>
  
  <UsuarioValue type="texto" placeholder={"Usuario"} onChange={this.onChangeUsuario} value={this.state.usuarioValue}/>
  <TextoValue type="texto" placeholder={"Mensagem"} onChange={this.onChangeMensagem} value={this.state.textoValue}/>
  <button onClick = {this.onEnviarMensagens}>Enviar</button>

  </ MensagemFormContainer>

    )
}




export default App;
