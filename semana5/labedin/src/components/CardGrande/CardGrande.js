import React from 'react';
import {
    EstiloCardGrande,
    EstiloCardGrandeImg,
    EstiloCardGrandeDiv,
    EstiloCardGrandeH4
} from './EstiloCardGrande'

function CardGrande(props) {
    return (
        <EstiloCardGrande>
            <EstiloCardGrandeImg src={props.imagem} />
            <EstiloCardGrandeDiv>
                <EstiloCardGrandeH4>{props.nome}</EstiloCardGrandeH4>
                <p>{props.descricao}</p>
            </EstiloCardGrandeDiv>
        </EstiloCardGrande>
    )
}

export default CardGrande;