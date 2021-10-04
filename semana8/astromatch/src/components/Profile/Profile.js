import React, { useState, useEffect } from "react";
import { ContProf } from "./ProfileStyles";

function Profile() {
  return (
    <ContProf>
      <img src={"https://image.businessinsider.com/5c268bdeaebf425e1216c2b5?width=1300&format=jpeg&auto=webp"} />
      <h1>Vovó Juju, 70</h1>
      <p>Não gosta de abacate, bem?</p>
    </ContProf>
  )
}

export default Profile;