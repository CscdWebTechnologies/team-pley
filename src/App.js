import React from "react";
import BlueBanner from "./components/BlueBanner";
import Header from "./components/Header";
import SpaceBanner from "./components/SpaceBanner";
import Table from "./components/Table";

// The app component
const App = () => {
  return (
    <div>
      <Header />
      <Table />
      <BlueBanner />
      <SpaceBanner />
    </div>
  );
};

export default App;
