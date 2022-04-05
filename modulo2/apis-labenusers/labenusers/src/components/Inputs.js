import React from "react";
import styled from "styled-components";
import axios from 'axios'


const InputContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

` 

export default class Input extends React.Component {
  state = {
    inputName: "",
    inputEmail: ""
  }

  onChangeEmail = (e) => { 
      this.setState({inputEmail: e.target.value})
     
}

  onChangeNome = (e) => { 
      this.setState({inputName: e.target.value})
     
    }

  criarUsuario= () => {
      const body = {
        name: this.state.inputName,
        email: this.state.inputEmail,
      }

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
          headers: {
              Authorization: "jerusa-silva-silveira"
          }
      }).then((res) => {  
          alert("Usuário cadastrado com sucesso!")  
        }).catch((err) => {
            alert("Usuário não cadastrado.")
        })                
  }

  render() {
    return <InputContainer>

          
          <div>
          <input placeholder="nome" value={this.state.inputName} onChange={this.onChangeNome}/>
          <input placeholder="email" value={this.state.inputEmail} onChange={this.onChangeEmail} />
          <button onClick={this.criarUsuario} > Criar usuário </button>
          </div>

      </InputContainer>;
  }
}