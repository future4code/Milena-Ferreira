import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Profile from "../../components/Profile/Profile";
import Matches from "../Matches/Matches";
import { ContainerContent, ContainerButtons } from "../../Styles";
import { getProfileToChoose, choosePerson } from "../../services/requests"

function Home() {
  const [screen, setScreen] = useState("matches")
  const [displayedProfile, setDisplayedProfile] = useState({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getProfileToChoose(saveCharacterOnState);
  }, [])

  const saveCharacterOnState = (data) => {
    setDisplayedProfile(data);
  }

  const changeScreen = () => {
    if (screen === "profiles") {
      return (
        <ContainerContent>
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
              onClick={() => choosePerson(displayedProfile, false)}
            />
            <Button
              type={"like"}
              text={"Yes"}
              onClick={() => choosePerson(displayedProfile, true)}
            />
          </ContainerButtons>
        </ContainerContent>
      )
    }
    if (screen === "matches") return <Matches />
  }

  return (
    <div>
      <Header />
      {changeScreen()}
    </div>
  )
}


export default Home;