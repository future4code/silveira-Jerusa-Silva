import styled from 'styled-components';

export const Home = styled.div`
  background-color:white;
  position: relative;
  width: 100vw; 
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
    .DivForm{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 100px;
      border: solid 1px grey;
      border-radius: 20px;
      box-shadow: 5px 5px 5px grey;
    }
  
`

export const DivInput= styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
 `

export const DivButton= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
`

export const Input= styled.input`
  margin-top: 20px;
  height: 20px; 
  border-radius: 30px;
  border: 1px solid black;
  outline: 0;
  font-size: 15px;
  padding:10px;
  width: 70%;
`

export const Button = styled.button`
  position: relative;
  border-radius: 10em;
  border: none;
  margin: 20px; 
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 50px;
  background-color: #fc4c04;
 
`