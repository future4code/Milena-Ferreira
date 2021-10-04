import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Profile from "../../components/Profile/Profile";
import { ContainerContent, ContainerButtons, ContainerAppTitle } from "../../Styles";
import { url, student } from "../../constants/constants";

function Home() {
  const apiLink = `${url}/${student}/person`

  const [likedProfiles, setLikedPeople] = useState([])
  const [displayedProfile, setDisplayedProfile] = useState({
    id: 'Cl3gXDxcQZkty8aoatXm',
    name: 'Ariel',
    bio: 'Adoro música e independência. Procuro alguém que saiba nadar.', photo: 'https://upload.wikimedia.org/wikipedia/pt/3/36/PrincesaAriel.png',
    age: 20
  })

  useEffect(() => {
    // getProfileToChoose();
  })

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