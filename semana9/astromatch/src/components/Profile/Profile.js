import React, { useState, useEffect } from "react";
import { ContainerProfile, ContainerProfileText, ProfilePicture } from "./ProfileStyles";

function Profile(props) {
  return (
    <ContainerProfile>
      <ProfilePicture src={props.photo} />
      <ContainerProfileText>
        <h1>{props.name}, {props.age}</h1>
        <p>{props.bio}</p>
      </ContainerProfileText>
    </ContainerProfile>
  )
}

export default Profile;