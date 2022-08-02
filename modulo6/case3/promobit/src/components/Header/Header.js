import React from "react";
import Logo from "../../assets/images/logo.png";
import { Header } from "../../assets/styles/Header/HeaderStyle";



const Headers = () => {
  return(
    <Header>
        <img src={Logo} onClick={() => window.scroll(0, 0)} alt="MovieDB logo" />
    </Header>
  )
};

export default Headers;