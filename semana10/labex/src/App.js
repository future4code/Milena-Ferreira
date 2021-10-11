import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TripsListPage from "./pages/TripsListPage/TripsListPage";

function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <TripsListPage />
    </div>
  );
}

export default App;
