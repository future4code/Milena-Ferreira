import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class ListaUsuarios extends React.Component {

  listaUsuarios = [
    "Murilo",
    "Leo",
    "Flamarion",
    "Ana",
    "Catarina"
  ];

  renderizaListaUsuarios = () => {
    const listaMapeada = this.listaUsuarios.map(usuario => {
      return (
        <div>
          {usuario}<button>X</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Usuários Cadastrados:</h3>
        {this.renderizaListaUsuarios}
      </div>
    )
  }
}