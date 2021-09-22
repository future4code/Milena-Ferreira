import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  padding: 30px;
`

const BtnSalvar = styled.button`
  background-color: hsl(236,32%,26%);
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  overflow: hidden;
  margin: 0 auto;
`

const ContainerInput = styled.div`
  margin-bottom: 15px;
`

export default class Cadastro extends React.Component {

  state = {
    valorNome: "",
    valorEmail: "",
  }

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value })
  }

  onChangeEmail = (event) => {
    this.setState({ valorEmail: event.target.value })
  }

  render() {
    return (
      <ContainerCadastro>
        <ContainerInput>
          <legend>Nome:</legend>
          <input
            onChange={this.onChangeNome}
            value={this.state.valorNome}
          />
        </ContainerInput>
        <ContainerInput>
          <legend>E-mail:</legend>
          <input
            onChange={this.onChangeEmail}
            value={this.state.valorEmail}
          />
        </ContainerInput>
        <BtnSalvar>Salvar</BtnSalvar>
      </ContainerCadastro>
    )
  }
}