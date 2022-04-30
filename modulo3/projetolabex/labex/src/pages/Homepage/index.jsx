import React from "react";
import { useNavigate} from "react-router-dom";
import {Container, MainHome, Botoes, Header} from './styled';



export const HomePage = () => {

  const routes = useNavigate()

  const goToListPage = () => {
    routes("/listtrippages")
  }

  const goToLoginPage = () => {
    routes("/loginpage")
  }

  return (
      
          <Container>
                <Header>
                    <p>LabeX</p>
  
                      <Botoes onClick={() => goToListPage()}>Ver Viagens</Botoes>
                      <Botoes  onClick={() => goToLoginPage()}>Área Admin</Botoes>
                </Header>

                    <MainHome>
                    
                    </MainHome>

                     
          </Container>
               
  );
}