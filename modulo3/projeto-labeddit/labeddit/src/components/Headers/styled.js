import styled from 'styled-components'


export const Div =styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
`

export const Nav= styled.nav`
  background: #3b5274; 
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  height:70px;
  width: 100%;
    .icon{
    font-size:1.5em;
  }
`

export const Button =styled.button`
  position: relative;
  display: flex;
  border:none;
  border-radius: 10em;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  font-size:0,8em;
  text-align: end;
  color: black;
  background-color: white;
  
`
