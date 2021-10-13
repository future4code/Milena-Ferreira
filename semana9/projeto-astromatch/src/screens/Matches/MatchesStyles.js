import styled from "styled-components";

export const MatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width:100%;
  height: 70%;
`

export const EachMatchContainer = styled.div`
  display: flex;
  width:70%;
  justify-content: space-between;
  align-items: center;
`

export const MatchesPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 20% 10%;
`