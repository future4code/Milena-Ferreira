import React from 'react';
import './ImagemButton.css'
import { EstiloImagemButton, EstiloImagemButtonImg } from './EstiloImagemButton.js';

function ImagemButton(props) {
    return (
        <EstiloImagemButton>
            <EstiloImagemButtonImg>
                <img src={props.imagem} />
            </EstiloImagemButtonImg>
            <p>{props.texto}</p>
        </EstiloImagemButton>

    )
}

export default ImagemButton;