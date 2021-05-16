<<<<<<< HEAD
import React from "react";
import Accounts from "./components/Accounts";
import BlueBanner from "./components/BlueBanner";
import Discover from "./components/Discover";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import SpaceBanner from "./components/SpaceBanner";
import Table from "./components/Table";
=======
import React from 'react'
import Accounts from './components/Accounts'
import BlueBanner from './components/BlueBanner'
import Crypto from './components/Crypto'
import Header from './components/Header'
import Landing from './components/Landing'
import Portfolio from './components/Portfolio'
import SpaceBanner from './components/SpaceBanner'
import Table from './components/Table'
>>>>>>> 51e9b2636426e8d52951edc7405ade7e9383cbc4

// The app component
const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Table />
      <Discover />
      <Portfolio />
      <Crypto />
      <BlueBanner />
      <Accounts />
      <SpaceBanner />
    </div>
  )
}

export default App
