import React from "react";
import Accounts from "./components/Accounts";
import BlueBanner from "./components/BlueBanner";
import Crypto from "./components/Crypto";
import Footer from "./components/Footer";
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
      <Crypto />
      <BlueBanner />
      <Accounts />
      <SpaceBanner />
      <Footer />
    </div>
  );
};

export default App;
