import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/1487608309075128321/R05xnjFf_400x400.jpg" 
          nome="Jerusa" 
          descricao="Olá, eu sou Jerusa, aluna do bootcamp de desenvolvimento Full Stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        
      <CardPequeno
        imagem= "https://w7.pngwing.com/pngs/298/243/png-transparent-email-address-computer-icons-mail-miscellaneous-angle-triangle.png"
        Email= "Email: jerusa@jerusa.com"
      />

      <CardPequeno
         imagem= "https://i.pinimg.com/736x/70/09/a2/7009a29bf948c0ef5a111a77c95d829c.jpg"
         endereço="Endereço: Avenida Beira-Mar"
      />
       
      </div>

      <div className="page-section-container">
      
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.dicasdecurriculo.com.br/wp-content/uploads/2013/06/images-63.jpg" 
          nome="Tel Telemática" 
          descricao="Operadora de Telemarketing" 
        />
        
        <CardGrande 
          imagem="https://static-cdn.myedools.com/org-7862%2Fschool-8411%2F39466e79493244cf08a2c8ed338222cd%2Fedools_capa-3.png" 
          nome="Eu ProgrAmo" 
          descricao="Conceitos básicos de JavaScript, HTML e CSS" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
