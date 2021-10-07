import React, { useState } from "react";
import Header from "./components/Header/Header";
import Profile from "./screens/Profile/Profile";
import Matches from "./screens/Matches/Matches";
import { AppContainer, ContentContainer } from "./Styles";

function App() {
  const [screen, setScreen] = useState("profile");

  const renderScreen = () => {
    switch (screen) {
      case "profile": return (<Profile />)
      case "matches": return (<Matches />)
      default: return <h3>Page not found</h3>
    }
  }

  const changeScreen = (screen) => {
    setScreen(screen)
  }

  return (
    <AppContainer>
      <ContentContainer>
        <Header changeScreen={changeScreen} currentScreen={screen} />
        {renderScreen()}
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
