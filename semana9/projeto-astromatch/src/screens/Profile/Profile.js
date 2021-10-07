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

  return (
    <ProfileContainer>
      <ProfilePhoto src={profile.photo} />
      <TextContainer>
        <h2>{profile.name}, {profile.age}</h2>
        <p>{profile.bio}</p>
      </TextContainer>
      <ButtonsContainer>
        <button onClick={() => choosePerson(profile.id, false)}>Dislike</button>
        <button onClick={() => choosePerson(profile.id, true)}>Like</button>
      </ButtonsContainer>
    </ProfileContainer>
  );
}

export default Profile;
