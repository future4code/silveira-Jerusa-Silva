import React, { useState } from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from 'styled-components';

const MainContainer = styled.div`
  border: 5px solid black;
  width: 250px;
  height: 500px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  background-color: #cbe4ea; 
 
`

function Main() {
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage/>
      case 'match-list':
        return <MatchListPage/>
      default:
        return <ChooseProfilePage/>
    }
  }

  const goToChooseProfilePage = () => {
    setSelectedPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectedPage('match-list')
  }

  return (
    <MainContainer>
      <AppBar
        goToChooseProfilePage={goToChooseProfilePage} 
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  )
}

export default Main