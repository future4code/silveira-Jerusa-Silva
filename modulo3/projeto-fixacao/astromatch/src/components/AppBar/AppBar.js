import React from 'react';
import styled from 'styled-components';

const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  align-items: flex-end;
  padding: 5% 10%;
  background-color: #cbe4ea;
  
  
 

`

function AppBar(props) {
  return (
    <AppBarContainer>
      <p>AstroMatch</p>
      
      <button onClick={props.goToChooseProfilePage}>âŠī¸</button>
      <button onClick={props.goToMatchListPage}>đ </button>
    </AppBarContainer>
  )
}

export default AppBar;