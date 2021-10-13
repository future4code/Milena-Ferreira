import React from "react";
import { HeaderContainer } from "./HeaderStyles";

function Header(props) {

  const renderButton = () => {
    switch (props.currentScreen) {
      case "matches": return (
        <button onClick={() => props.changeScreen("profile")}>Profiles</button>
      )
      case "profile": return (
        <button onClick={() => props.changeScreen("matches")}>Matches</button>
      )
      default: return <button>Home</button>
    }
  }

  return (
    <HeaderContainer>
      Astromatch
      {renderButton()}
    </HeaderContainer>
  );
}

export default Header;
