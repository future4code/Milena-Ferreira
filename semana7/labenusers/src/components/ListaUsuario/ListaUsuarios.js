import React from "react";
import axios from "axios";

export default class ListaUsuarios extends React.Component {

  renderUsers = () => {
    const listaMapeada = this.props.listaUsuarios.map(usuario => {
      return (
        <div key={usuario.id}>
          {usuario.name} <button onClick={() => this.deleteUser(usuario.id)}>X</button>
        </div>
      )
    })
    return listaMapeada;
  }

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "milena-lara-maryam"
      }
    }).then((resposta) => {
      console.log("deleteUser resposta", resposta.data);
    }).catch((erro) => {
      console.log(erro.message)
    })
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