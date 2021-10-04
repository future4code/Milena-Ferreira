import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Profile from "../../components/Profile/Profile";
import { ContainerContent, ContainerButtons, ContainerAppTitle, ContainerProfileProvisorio } from "../../Styles";
import { url, student } from "../../constants/constants";

function Home() {
  const apiLink = `${url}/${student}/person`

  const [likedProfiles, setLikedPeople] = useState([])
  const [displayedProfile, setDisplayedProfile] = useState({})

  useEffect(() => {
    getProfileToChoose();
  })

  const getProfileToChoose = () => {
    axios.get(apiLink)
      .then(res => {
        console.log("RESPONSE", res.data.profile);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <ContainerContent>
      <ContainerAppTitle>AppTitle</ContainerAppTitle>
      <Profile />
      <ContainerProfileProvisorio />
      <ContainerButtons>
        <Button
          type={"dislike"}
          text={"No"}
        />
        <Button
          type={"like"}
          text={"Yes"}
        />
      </ContainerButtons>
    </ContainerContent>
  )
}

export default Home;