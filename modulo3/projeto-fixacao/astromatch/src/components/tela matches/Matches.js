import React, {useState, useEffect} from 'react'
import axios from 'axios'



   

export default function Matches (props) {

   const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jerusa-silva-silveira/matches"

   const [arrayMatches, setArrayMatches] = useState([])
   

   useEffect(() => {
      mostraMatches()
   }, [])

 