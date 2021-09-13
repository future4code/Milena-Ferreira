import React from 'react';
import { EstiloImagemButton, EstiloImagemButtonImg } from './EstiloImagemButton.js';

function ImagemButton(props) {
    return (
        <EstiloImagemButton>
            <EstiloImagemButtonImg src={props.imagem} />
            <p>{props.texto}</p>
        </EstiloImagemButton>

    )
}

export default ImagemButton;