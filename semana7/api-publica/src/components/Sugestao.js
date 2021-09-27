import React from "react";
import styled from "styled-components";

export default class Sugestao extends React.Component {
  render() {
    return (
      <div>
        <p>Atividade: {this.props.atividade}</p>
        <p>Tipo: {this.props.tipo}</p>
        <p>Participantes: {this.props.participantes}</p>
        <p>Preço: R$ {this.props.preco}</p>
      </div>
    )
  }
}