import React, { useEffect, useState } from "react";
import { ContainerHeader } from "./HeaderStyles";

function Header() {
  return (
    <ContainerHeader>
      <div>
        <h1>LabeX</h1>
        <p className="subtitle">space travel made easy</p>
      </div>
      <div>Viagens | Home | Login</div>
    </ContainerHeader>
  );
}

export default Header;
