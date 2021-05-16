import React from "react";
import "../assets/styles/discover.css";
import skale from "../assets/images/skale.svg";
import forth from "../assets/images/forth.svg";
import graph from "../assets/images/graph.svg";
import stellar from "../assets/images/stellar.svg";

const Discover = () => {
  return (
    <div className="discover__main">
      <div className="discover__wrapper">
        <div className="discover__left">
          <h3 className="discover-h1">Earn up to $28 worth of crypto </h3>
          <p className="discover-p">
            Discover how specific cryptocurrencies work — and <br /> get a bit
            of each crypto to try out for yourself.
          </p>
          <button className="discover-btn">start earning</button>
        </div>

        <div className="discover__right">
          <div className="right-item-container">
            <div className="right-item-container-left">
              <img src={skale} alt="skale logo" className="discover__logo" />
              <h2 className="fullName">SKALE</h2>
              <h3 className="short-name">SKL</h3>
            </div>
            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 SKL</h4>
            </div>
          </div>

          <div className="right-item-container">
            <div className="right-item-container-left">
              <img src={forth} alt="forth logo" className="discover__logo" />
              <h3 className="fullName">
                AmpleForth <br /> Governance Token
              </h3>
            </div>
            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 FORTH</h4>
            </div>
          </div>

          <div className="right-item-container">
            <div className="right-item-container-left">
              <img src={graph} alt="graph logo" className="discover__logo" />
              <h3 className="fullName">The Graph</h3>
              <h3 className="short-name">GRT</h3>
            </div>
            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 GRT</h4>
            </div>
          </div>
          <div className="right-item-container">
            <div className="right-item-container-left">
              <img
                src={stellar}
                alt="stellar logo"
                className="discover__logo"
              />
              <h3 className="fullName">SKALE</h3>
              <h3 className="short-name">SKL</h3>
            </div>

            <div className="right-item-container-right">
              <h4 className="earn">Earn $3 XLM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
