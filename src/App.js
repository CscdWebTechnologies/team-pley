import React from "react";
import BlueBanner from "./components/BlueBanner";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import SpaceBanner from "./components/SpaceBanner";
import Table from "./components/Table";

// The app component
const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Table />
      <Portfolio />
      <BlueBanner />
      <SpaceBanner />
    </div>
  );
};

export default App;
