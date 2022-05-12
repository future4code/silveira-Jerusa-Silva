import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Home, Button, DivInput, Input, DivButton} from './styled';
import axios from 'axios';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {BASE_URL} from '../../constants/urls';




export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate= useNavigate();

  const {form, onChange, clearFields}= useForm({ email: "", password: "" })


  const submitForm = ((e)=>{
    e.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitLogin()
    
  })
  
  
  const onSubmitLogin = () => {
    
    const url = `${BASE_URL}/users/login`
    const headers = {"Content-Type":"application/json"}
    const body = form

    axios.post(url, body, headers)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        
        clearFields()
        navigate("/feed/:id")
        
    })
    .catch((error) => {
        console.log(error.res);
        
    })
  }


    return (
    <Home>
      
        
        <div className="DivForm">
          <form onClick={submitForm}>
              <DivInput>
                <div>
          
                  <h3 className="h3">Entrar no LabEddit</h3>
                </div>
                
                  <Input
                  name="email"
                  value={form.email}
                  placeholder="E-mail"
                  onChange={onChange}
                  type="email"
                  pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
                 
                  />
                  <Input
                  name="password"
                  value={form.password}
                  placeholder="Senha"
                  onChange={onChange}
                  type="password"
                  pattern={"\\w{8,}"}
                  title={"A senha deve conter no mínimo 8 caracteres"}
                 
                  />
              </DivInput>
              <DivButton>
                  <Button type={"submit"}> Entrar </Button> 
                  
              </DivButton>
              
              </form> 
              <p> Crie uma conta <Link to="/cadastro">aqui</Link></p></div>
              
        </Home>
  );
}