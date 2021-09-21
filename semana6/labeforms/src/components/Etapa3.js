import React from "react";
import TelaCentralizada from "./TelaCentralizada";

function Etapa3() {
  return (
    <TelaCentralizada>
      <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
      <p>5. Por que você não terminou um curso de graduação</p>
      <input />
      <p>6. Você fez algum curso complementar?</p>
      <select>
        <option value="Curso técnico">Curso técnico</option>
        <option value="Cursos de inglês">Cursos de inglês</option>
        <option value="Não fiz curso complementar">Não fiz curso complementar</option>
      </select>
    </TelaCentralizada>
  );
}

export default Etapa3;
