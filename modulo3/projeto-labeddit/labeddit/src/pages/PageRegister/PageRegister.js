import React from 'react';
import {useNavigate} from "react-router-dom";
import {Home, ButtonBack, Button, DivInput, Input, DivButton} from './styled';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import {BASE_URL} from '../../constants/urls';



export default function Register(){

  
  const navigate= useNavigate();

  const { form, onChange, cleanFields } = useForm({ username:"", email: "", password: ""})

  const goToHome = () => {
    navigate("/")
  }

    const submitForm = (e) => {
    e.preventDefault();
    onSubmitRegister()
    console.log("Formulário enviado!", form);
  };

  const onSubmitRegister = () => {
    const body = form
    const url = `${BASE_URL}/users/signup`
    const headers = {"Content-Type":"application/json"}

    axios.post(url, body, {headers})
    .then((res) => {
       console.log(res.data)
        alert("Cadastro realizado")
        cleanFields()
        navigate("/feed") 
    })
    .catch((error) => {
       
        console.log(error.res);
        
    })
  }

    return (
    <Home>
          <form onClick={submitForm}>
              <DivInput>
                <div>
                  
                  <h2 className="h2">Crie uma nova conta</h2>
                  <h5 className="h5"> é rápido e fácil</h5> 
                </div>

                <Input
                  name={"username"}
                  value={form.username}
                  placeholder="Nome"
                  onChange={onChange}
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}/>
                
                  <Input
                  name={"email"}
                  value={form.email}
                  placeholder="E-mail"
                  onChange={onChange}
                  type="email"
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                 
                  />
                  <Input
                  name={"password"}
                  value={form.password}
                  placeholder="Senha"
                  onChange={onChange}
                  type="password"
                  pattern={"\\w{8,}"}
                  title={"A senha deve conter no mínimo 8 caracteres"}
                  />
              </DivInput>
              <DivButton>
                <Button type="submit"> Criar </Button> 
                <ButtonBack onClick={()=>goToHome(navigate)}> Voltar </ButtonBack>
              </DivButton>  
              </form>
              
        </Home>



  );

}