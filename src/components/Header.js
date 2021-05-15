import React from "react";
import "../assets/styles/header.css";
import logo from "../assets/images/Consumer_Wordmark.svg";

// Header component
const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="coinbase logo" />
        </div>

        {/* middle links */}
        <ul className="middle__links">
          <li>Price</li>
          <li>Learn</li>
          <li>Individuals</li>
          <li>Businesses</li>
          <li>Developers</li>
          <li>Company</li>
        </ul>

        {/* authentication links */}
        <ul className="auth__links">
          <li className="signin">sign in</li>
          <li className="get__started">Get started</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
