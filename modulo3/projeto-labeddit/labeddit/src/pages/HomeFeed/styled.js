import styled from 'styled-components'


export const Home = styled.div`
 
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color:white;
 
`

export const DivForm = styled.div`
  border: 1px solid #202434;
  box-shadow: 0 0 1em #202434 ;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 50px;
  width:35%;
  background-color: white;
  
`

export const Form = styled.form`
padding-top: 5px;
padding-bottom: 10px;
 .input{
  border: 2px solid #202434;
  width: 200px;
  height: 30px;
  border-radius: 30px;
  padding-left: 50px;
  margin-right: 10px;
  
 }
`
export const DivBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  width: 80%;
`

export const Name = styled.p`
  border-bottom: 1px solid red;
  padding-bottom: 15px;
  width: 100%;
  text-align: center;
`

export const Text = styled.p`
  border-bottom: 1px solid #202434;
  padding-bottom: 15px;
  width: 100%;
  text-align: center;
`

export const DivPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 20px;
  width: 100%;
`

export const Button = styled.div `
   
`

export const ButtonSend = styled.button`
  position: relative;
  border-color: white;
  border-radius: 10em;
  border: none;
  margin: 20px; 
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  font-size:1em;
  font-weight: bold;
  text-align: center;
  color: black;
  cursor: pointer;
  margin-top: 50px;
  background-color: #fc4c04;
  box-shadow: 0 0 40px 40px transparent inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
    :hover {
     box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
    }
`