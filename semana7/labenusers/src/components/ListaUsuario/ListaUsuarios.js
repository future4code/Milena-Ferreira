import React from "react";

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
          {usuario} <button>X</button>
        </div>
      )
    })
    return listaMapeada;
  }

  render() {
    return (
      <div>
        <h2>Usuários Cadastrados:</h2>
        {this.renderizaListaUsuarios}
      </div>
    )
  }
}