import React from "react";
import { ContainerPrincipal, Button, Img, ParagrafoPersonalizado } from "./styled";
import { useNavigate } from "react-router-dom";
import { GoToFeedPage, GoToLoginPage } from "../../Routes/RouteFunctions";
export default function Header(){
    const navigate = useNavigate()

    const Logout = (navigate) =>{
        localStorage.removeItem("token")
                GoToLoginPage(navigate)
    }

    return(
        <ContainerPrincipal>
           
            <ParagrafoPersonalizado onClick={()=>GoToFeedPage(navigate)}>LariPost</ParagrafoPersonalizado>
            <Button onClick={()=> Logout(navigate)}>Login</Button>
        </ContainerPrincipal>
    )
}