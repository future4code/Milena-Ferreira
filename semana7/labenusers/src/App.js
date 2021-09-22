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
  justify-content: center;
  margin-top: 10px;
`

export default class App extends React.Component {
  state = {
    section: "cadastro",
    users: [],
    userName: "",
    userEmail: ""
  };

  componentDidMount = () => {
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

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value })
  }

  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value })
  }

  renderSection = () => {
    if (this.state.section === "cadastro") return <Cadastro
      onChangeUserName={this.onChangeUserName}
      onChangeUserEmail={this.onChangeUserEmail}
      userName={this.state.userName}
      userEmail={this.state.userEmail}
      onClickSave={this.createUser}
    />;
    if (this.state.section === "usuarios") return <ListaUsuarios />;
  }

  onClickBtnNav = () => {
    if (this.state.section === "cadastro") this.setState({ secao: "usuarios" })
    if (this.state.section === "usuarios") this.setState({ secao: "cadastro" })
  }

  pickBtnTxt = () => {
    let texto;
    if (this.state.section === "cadastro") texto = "Ir para a página de lista";
    if (this.state.section === "usuarios") texto = "Ir para a página de registro";
    return texto;
  }

  render() {
    return (
      <Home>
        <button onClick={this.onClickBtnNav}>{this.pickBtnTxt()}</button>
        <Container>
          {this.renderSection()}
        </Container>
      </Home>
    );
  }
}

