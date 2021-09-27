import styled from "styled-components";

export const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  padding: 30px;
`

export const BtnSalvar = styled.button`
  background-color: #343765;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  overflow: hidden;
  margin: 0 auto;
  &:hover {
    background-color: #454a87;
  }
`

export const ContainerInput = styled.div`
  margin-bottom: 15px;
`
