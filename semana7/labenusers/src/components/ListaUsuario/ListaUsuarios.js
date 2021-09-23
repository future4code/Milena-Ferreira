import React from "react";

export default class ListaUsuarios extends React.Component {

  renderUsers = () => {
    const listaMapeada = this.props.listaUsuarios.map(usuario => {
      return (
        <div>
          {usuario.name} <button onClick={this.props.onClickDelete}>X</button>
        </div>
      )
    })
    return listaMapeada;
  }

  render() {
    return (
      <div>
        <h2>Usuários Cadastrados:</h2>
        {this.renderUsers()}
      </div>
    )
  }
}