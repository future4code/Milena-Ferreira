import axios from "axios";
import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro/Cadastro"
import ListaUsuarios from "./components/ListaUsuario/ListaUsuarios";

const Home = styled.div`
  margin: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export default class App extends React.Component {
  state = {
    section: "usuarios",
    users: [],
    userName: "",
    userEmail: ""
  };

  componentDidMount = () => {
    this.getAllUsers();
  }

  componentDidUpdate = () => {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "milena-lara-maryam"
      }
    }).then((resposta) => {
      this.setState({ users: resposta.data })
      console.log("getAllUsers Resposta:", this.state.users)
    }).catch((erro) => {
      console.log("Erro:", erro.message)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "milena-lara-maryam"
      }
    }).then((resposta) => {
      console.log("CreateUser resposta", resposta.data);
    }).catch((erro) => {
      console.log(erro.message)
    })
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

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value })
  }

  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value })
  }

  onClickChangeSection = () => {
    if (this.state.section === "cadastro") {
      this.setState({ section: "usuarios" })
    }
    if (this.state.section === "usuarios") {
      this.setState({ section: "cadastro" })
    }
  }

  changeBtnTxt = () => {
    let texto;
    if (this.state.section === "cadastro") texto = "Ir para a página de lista";
    if (this.state.section === "usuarios") texto = "Ir para a página de registro";
    return texto;
  }

  renderSection = () => {
    if (this.state.section === "cadastro") {
      return (
        <Cadastro
          onChangeUserName={this.onChangeUserName}
          onChangeUserEmail={this.onChangeUserEmail}
          userName={this.state.userName}
          userEmail={this.state.userEmail}
          onClickSave={this.createUser}
        />
      )
    }
    if (this.state.section === "usuarios") {
      return (
        <ListaUsuarios
          listaUsuarios={this.state.users}
          onClickDelete={this.deleteUser(this.state.users)}
        />
      )
    }
  }

  render() {
    return (
      <Home>
        <button onClick={this.onClickChangeSection}>{this.changeBtnTxt()}</button>
        <Container>
          {this.renderSection()}
        </Container>
      </Home>
    );
  }
}

