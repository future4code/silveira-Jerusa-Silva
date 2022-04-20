import React, {useState} from 'react'
import axios from 'axios'
import Inicial from './components/tela inicial/Inicial'
import Matches from './components/tela matches/Matches'

function App() {

  const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jerusa-silva-silveira/clear"

  const [paginaInicial, setPaginaInicial] = useState(true)

  const tela = () => {
    if (paginaInicial === true) {
      return <Inicial mudaTela={mudaPagina} limpaMatches={limpaTudo}/>
    } else {
      return <Matches mudaTela={mudaPagina} limpaMatches={limpaTudo}/>
    }
  }

  const limpaTudo = () => {
    axios.put(baseURL)
    .then(alert("Tudo limpo por aqui."))
    .catch(erro => {
      console.log(erro.message)
    })
  }

  const mudaPagina = () => {
    setPaginaInicial(!paginaInicial)
  }

  return (
    <div>
      {tela()}
    </div>
  );
}

export default App;