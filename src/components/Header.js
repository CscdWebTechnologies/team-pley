import React from "react";
import "../assets/header.css";
import logo from "../assets/images/Consumer_Wordmark.svg";

// Header component
const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="logo">
          <img src={logo} alt="coinbase logo" />
        </div>

        <ul className="middle__links">
          <li>Price</li>
          <li>Learn</li>
          <li>Individuals</li>
          <li>Businesses</li>
          <li>Developers</li>
          <li>Company</li>
        </ul>

        <ul className="auth__links">
          <li className="signin">sign in</li>
          <li className="get__started">Get started</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
