import React from "react";
import TelaCentralizada from "./TelaCentralizada";

function Etapa1() {
  return (
    <TelaCentralizada>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <p>1. Qual o seu nome?</p>
      <input />
      <p>2. Qual sua idade?</p>
      <input />
      <p>3. Qual seu email?</p>
      <input />
      <p>4. Qual a sua escolaridade?</p>
      <select>
        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
        <option value="Ensino médio completo">Ensino médio completo</option>
        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
        <option value="Ensino superior completo">Ensino superior completo</option>
      </select>
    </TelaCentralizada>
  );
}

export default Etapa1;
