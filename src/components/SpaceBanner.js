import React from "react";
import "../assets/spacebanner.css";

const SpaceBanner = () => {
  return (
    <div className="main__space__banner">
      <div className="space__banner__wrapper">
        <div className="space__left">
          <h2 className="space__left__title">Earn up to $28 worth of crypto</h2>
          <p className="space__left__para">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself
          </p>
          <button className="space__left__btn">Start earning</button>
        </div>
        <div className="space__right">
          <img
            src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"
            alt="space pic"
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceBanner;
