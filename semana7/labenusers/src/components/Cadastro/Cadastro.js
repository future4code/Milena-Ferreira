import React from "react";
import {
  ContainerCadastro,
  BtnSalvar,
  ContainerInput
} from "./EstiloCadastro"

export default class Cadastro extends React.Component {

  render() {
    return (
      <ContainerCadastro>
        <ContainerInput>
          <legend>Nome:</legend>
          <input
            onChange={this.props.onChangeUserName}
            value={this.props.userName}
          />
        </ContainerInput>
        <ContainerInput>
          <legend>E-mail:</legend>
          <input
            onChange={this.props.onChangeUserEmail}
            value={this.props.userEmail}
          />
        </ContainerInput>
        <BtnSalvar onClick={this.props.onClickSave}>Salvar</BtnSalvar>
      </ContainerCadastro>
    )
  }
}