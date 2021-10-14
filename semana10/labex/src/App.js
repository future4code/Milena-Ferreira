import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TripsListPage from "./pages/TripsListPage/TripsListPage";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <HomePage /> */}
      {/* <TripsListPage /> */}
      {/* <ApplicationFormPage /> */}
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
