import React from "react";
import Cadastro from "./components/Cadastro";
import styled from "styled-components";

export default class BtnNavegacao extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.texto}</button>
      </div>
    )
  }
}