import React from 'react';
import { EstiloCardoPequeno, EstiloCardoPequenoImg } from './EstiloCardPequeno'

function CardPequeno(props) {
  return (
    <EstiloCardoPequeno>
      <EstiloCardoPequenoImg src={props.imagem} />
      <p><strong>{props.campo}</strong> {props.valor}</p>
    </EstiloCardoPequeno>
  )
}

export default CardPequeno;