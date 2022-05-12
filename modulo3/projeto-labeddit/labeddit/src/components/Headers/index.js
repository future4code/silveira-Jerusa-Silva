import React from 'react';
import { useNavigate} from "react-router-dom";
import {Div, Nav, Button} from './styled';







export default function HomeAdm() {

  const routes = useNavigate()

  const goToLogin = () => {
    routes("/")
  }


    return (
          <Nav>
    
            <Div>
              <div><Button onClick={() => goToLogin()}>Sair</Button></div>     
            </Div>       
          </Nav>
    );
}

