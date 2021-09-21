import React from 'react';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import TelaCentralizada from './components/TelaCentralizada';

export default class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  }

  atualizaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  renderizaButton = () => {
    if (this.state.etapa !== 4) {
      return <button onClick={this.atualizaEtapa}>Próxima etapa</button>
    }
    return
  }

  render() {
    return (
      <TelaCentralizada>
        {this.renderizaEtapa()}
        {this.renderizaButton()}
      </TelaCentralizada>
    );
  }
}
