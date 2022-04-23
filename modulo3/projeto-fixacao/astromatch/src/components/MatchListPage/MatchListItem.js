import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  
`

const Imagem = styled.img`
  height: 30px;
  width: 30px;
`

function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContainer>
      <Imagem src={profile.photo}/>
      <p>{profile.name}</p>
    </ListItemContainer>
  )
}

export default MatchListItem;