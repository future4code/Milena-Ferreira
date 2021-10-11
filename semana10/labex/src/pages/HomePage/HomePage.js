import React, { useEffect, useState } from "react";
import MarsPicture from "../../assets/mars-landscape.jpg"
import { StyledMarsPicture, ContainerTextAndImage, ContainerTexto } from "./HomePageStyles";

function HomePage() {
  return (
    <ContainerTextAndImage>
      <StyledMarsPicture src={MarsPicture} />
      <ContainerTexto>
        <h2>Já pensou em fazer conhecer Marte? Fazer um tour pelas luas de Júpiter? A LabeX te leva!</h2>
        <p>Clique aqui para ver nossas opções de viagens →</p>
      </ContainerTexto>
    </ContainerTextAndImage>
  );
}

export default HomePage;
