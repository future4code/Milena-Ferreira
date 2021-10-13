import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height: 70%;
`

export const ProfilePhoto = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  object-position: 20% 10%;
`

export const TextContainer = styled.div`
  margin: 0 1rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  button{
    width: 4rem;
  }
  `