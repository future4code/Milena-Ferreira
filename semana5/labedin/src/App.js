import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/profilepic.jpg'
import HouseIcon from './img/house-icon.png'
import EmailIcon from './img/email-icon.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={FotoPerfil}
          nome="Milena"
          descricao="Oi, eu sou a Milena. Sou desenvolvedora web full stack. Adoro aprender coisas novas, por isso amo programar :) Bom, nem sempre... Tem horas que os bugs me deixam louca!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={EmailIcon}
          campo="Email:"
          valor="milenalrf@gmail.com"
        />
      </div>
      <div className="page-section-container">

        <CardPequeno
          imagem={HouseIcon}
          campo="Endereço:"
          valor="Rua Labenu, nº 15"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQF-W-3FnEdouw/company-logo_200_200/0/1630006379091?e=1639008000&v=beta&t=shWcDiyIrdvMokJ3WS21eBlGM2lSUnVfVDr8CI9f3kY"
          nome="Cultura Inglesa - Professora de Inglês"
          descricao="Experiência ensinando crianças a partir de 3 anos, adolescentes e adultos, em cursos regulares do nível básico ao intermediário. Aulas presenciais e remotas."
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQF79y_qYPJ0_g/company-logo_200_200/0/1580386329799?e=1639008000&v=beta&t=tsbY9_bZRM1yPRU6PoTI0q2wHLsmzeytErYQ3Gk885U"
          nome="Stefanini - Analista de suporte bilíngue junior"
          descricao="Suporte a usuários corporativos, abertura de chamados e encaminhamento às equipes responsáveis (equipe internacional, comunicação em inglês)."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
