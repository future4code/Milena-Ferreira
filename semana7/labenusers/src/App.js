import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";

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
    secao: 1
  }

  determinaTxtBtn = () => {
    let texto = ""
    if (this.state.secao === 1) texto = "Ir para a página de lista";
    else if (this.state.secao === 2) texto = "Ir para a página de registro";
    return texto;
  }

  render() {
    return (
      <Home>
        <button>{this.determinaTxtBtn()}</button>
        <Container>
          <Cadastro />
        </Container>
      </Home>
    );
  }
}

