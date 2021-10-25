import React from "react";
import Router from "./router/Router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
