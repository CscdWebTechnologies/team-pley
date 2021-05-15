import React from "react";
import "../assets/styles/landing.css";
import LandingImage from "./LandingImage";

const Landing = () => {
  return (
    <div className="landing__main">
      <div className="landing__wrapper">
        <div className="landing__writeup">
          <a href="/" class="landing_btc_arrow">
            <i class="fab fa-btc"></i>
            <p>Jump Start Your Portfolio</p>
            <i class="fas fa-arrow-right"></i>
          </a>
          <h1 class="landing_title">
            Jump start <br /> your crypto <br /> portfolio
          </h1>
          <p class="landing__para">
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
          <form>
            <div className="form__group">
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="form__group">
              <input type="submit" placeholder="Get started" />
            </div>
          </form>
          <a href="/" className="terms__applied">
            * Terms apply
          </a>
        </div>

        <div className="landing__image">
          <LandingImage />
        </div>
      </div>
    </div>
  );
};

export default Landing;
