import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Profile from "../../components/Profile/Profile";
import { ContainerContent, ContainerButtons, ContainerAppTitle } from "../../Styles";
import { base_url, student } from "../../constants/constants";
import { getProfileToChoose, getMatches, choosePerson } from "../../services/requests";

function Home() {
  const [displayedProfile, setDisplayedProfile] = useState({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getProfileToChoose(setDisplayedProfile);
  }, [])

  const saveMatches = (character) => {
    const matchesCopy = [...matches, character];

  }

  return (
    <ContainerContent>
      <ContainerAppTitle>AstroMatch</ContainerAppTitle>
      <Profile
        photo={displayedProfile.photo}
        name={displayedProfile.name}
        age={displayedProfile.age}
        bio={displayedProfile.bio}
      />
      <ContainerButtons>
        <Button
          type={"dislike"}
          text={"No"}
          onClick={getProfileToChoose}
        />
        <Button
          type={"like"}
          text={"Yes"}
          onClick={getProfileToChoose}
        />
      </ContainerButtons>
    </ContainerContent>
  )
}

export default Home;