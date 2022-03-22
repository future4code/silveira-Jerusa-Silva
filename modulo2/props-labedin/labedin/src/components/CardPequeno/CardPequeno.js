import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
            <img src={ props.imagem } />
            <div>
                { props.Email }
                {props.endereço}
            </div>
        </div>
    )
}

export default CardPequeno;