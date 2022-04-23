import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
`

function ChooseButtons(props) {
  return (
    <ButtonsContainer>
      <button onClick={props.onClickNo}>❌</button>
      <button onClick={props.onClickYes}>💚</button>
    </ButtonsContainer>
  )
}

export default ChooseButtons;