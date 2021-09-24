import axios from "axios";
import React from "react";
import styled from "styled-components";
import Sugestao from "./components/Sugestao";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export default class App extends React.Component {
  state = {
    activity: {}
  }

  componentDidMount = () => {
    this.getActivity();
  }

  getActivity = () => {
    axios
      .get("http://www.boredapi.com/api/activity/")
      .then(response => {
        console.log(response.data)
        this.setState({ atividade: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderActivity = () => {
    return (
      <Sugestao
        atividade={this.state.atividade.activity}
        tipo={this.state.atividade.type}
        participantes={this.state.atividade.participants}
        preco={this.state.atividade.price}
      />
    )
  }

  render() {
    return (
      <Home>
        <h2>Sugestões de atividades para pessoas entediadas</h2>
        <button
          onClick={this.renderActivity}>
          Clique para receber uma sugestão
        </button>
      </Home>
    );
  }
}