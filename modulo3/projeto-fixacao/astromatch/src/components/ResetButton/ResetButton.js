import React from 'react'
import axios from 'axios'

function ResetButton() {
  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jerusa-silva-silveira/clear').then(response => {
      console.log(response)
    })
  }
  return (
    <div><button onClick={onClickReset}> Apagar lista🗑️</button></div>
  )
}

export default ResetButton