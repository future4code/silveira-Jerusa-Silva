import React from 'react';
import styled from 'styled-components';
import CriarPlaylist from './CriarPlaylist';

const TituloLabefy = styled.h1`
    font-size: 40px;
    display: flex;
    width: 650px;
    background-color: #BCEE68;
    color: #FFFFF0;
    
`
const BoxHeader = styled.div`
    display: flex;
    justify-content: flex-end ;
    width: 910px;
    background-color: #BCEE68;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export default class Header extends React.Component {
    render() {
        return(
            
            <BoxHeader>
                
                <TituloLabefy>Labefy</TituloLabefy>
        
                <CriarPlaylist />
            
            </BoxHeader>
        )
    }
};