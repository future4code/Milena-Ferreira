import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import { ContainerContent, ContainerPage } from "./Styles";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") return <Home />
    if (page === "matches") return <Matches />
    else return <ContainerContent>Page not found</ContainerContent>
  }

  return (
    <ContainerPage>
      {renderPage()}
    </ContainerPage>
  );
}

export default App;
