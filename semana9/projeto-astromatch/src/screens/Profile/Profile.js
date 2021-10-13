import React, { useEffect, useState } from "react";
import { getProfileToChoose, choosePerson } from "../../services/requests";
import { ProfileContainer, ProfilePhoto, ButtonsContainer, TextContainer } from "./ProfileStyles";

function Profile() {

  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfileToChoose(saveProfile);
  }, [])

  const saveProfile = (data) => {
    setProfile(data);
  }

  const onClickChoosePerson = (choice) => {
    choosePerson(profile.id, choice);
    getProfileToChoose(saveProfile);
    console.log(`Escolhi ${profile.name}: ${choice}`)
  }

  return (
    <ProfileContainer>
      <ProfilePhoto src={profile.photo} />
      <TextContainer>
        <h2>{profile.name}, {profile.age}</h2>
        <p>{profile.bio}</p>
      </TextContainer>
      <ButtonsContainer>
        <button onClick={() => onClickChoosePerson(false)}>Dislike</button>
        <button onClick={() => onClickChoosePerson(true)}>Like</button>
      </ButtonsContainer>
    </ProfileContainer>
  );
}

export default Profile;
