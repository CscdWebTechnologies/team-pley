import React from "react";
import "../assets/portfolio.css";
import mobile from "../assets/images/mobile.svg";
import vault from "../assets/images/vault.svg";
import graph from "../assets/images/graph_icon.svg";
import calender from "../assets/images/calendar.svg";

const Portfolio = () => {
  return (
    <div className="portfolio__main">
      <div className="portfolio__main__heading">
        <h1 className="portfolio__h1">
          Create your cryptocurrency portfolio today
        </h1>
        <p className="portfolio__p">
          Coinbase has a variety of features that make it the best place to
          start trading
        </p>
      </div>

      <div className="portfolio__container">
        <div className="portfolio__left">
          <div className="portfolio__item">
            <div className="portfolio__icon__container">
              <img src={graph} alt="lol" className="portfolio__icon" />
            </div>
            <div className="portfolio__writeup__container">
              <h3 className="portfolio__h3">Manage your portfolio</h3>
              <p className="portfolio__p">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>
          <div className="portfolio__item">
            <div className="portfolio__icon__container">
              <img src={calender} alt="lol" className="portfolio__icon" />
            </div>
            <div className="portfolio__writeup__container">
              <h3 className="portfolio__h3">Recurring buys</h3>
              <p className="portfolio__p">
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>
          <div className="portfolio__item">
            <div className="portfolio__icon__container">
              <img src={vault} alt="lol" className="portfolio__icon" />
            </div>
            <div className="portfolio__writeup__container">
              <h3 className="portfolio__h3">Vault protection</h3>
              <p className="portfolio__p">
                For added security, store your funds in a vault with time
                delayed withdrawals.
              </p>
            </div>
          </div>
          <div className="portfolio__item">
            <div className="portfolio__icon__container">
              <img src={mobile} alt="lol" className="portfolio__icon" />
            </div>
            <div className="portfolio__writeup__container">
              <h3 className="portfolio__h3">Mobile apps</h3>
              <p className="portfolio__p">
                Stay on top of the markets with the Coinbase app for{" "}
                <a href="/" className="android__link">
                  Android
                </a>{" "}
                or{" "}
                <a href="/" className="ios__link">
                  iOS
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio__right">
          <img
            src="https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp"
            alt="portfolio pic"
            className="portfolio__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
