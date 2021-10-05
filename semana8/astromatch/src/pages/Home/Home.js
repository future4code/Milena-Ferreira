import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Profile from "../../components/Profile/Profile";
import { ContainerContent, ContainerButtons, ContainerAppTitle } from "../../Styles";
import { url, student } from "../../constants/constants";

function Home() {
  const apiLink = `${url}/${student}/person`


  const [displayedProfile, setDisplayedProfile] = useState({})

  useEffect(() => {
    getProfileToChoose();
  }, [])

  const getProfileToChoose = () => {
    axios.get(apiLink)
      .then(res => {
        setDisplayedProfile(res.data.profile)
        console.log("RESPONSE", res.data.profile);
      })
      .catch(err => {
        console.log(err);
      })
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