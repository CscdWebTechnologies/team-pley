import React from "react";
import "../assets/bluebanner.css";

const BlueBanner = () => {
  return (
    <div className="blue__banner__main">
      <div className="blue__banner__wrapper">
        <div className="blue__banner__texts">
          <h2 className="blue__banner__texts_title">$335B</h2>
          <p className="blue__banner__texts_para">Quarterly volume traded</p>
        </div>
        <div className="blue__banner __texts">
          <h2 className="blue__banner__texts_title">100+</h2>
          <p className="blue__banner__texts_para">Countries supported</p>
        </div>
        <div className="blue__banner __texts">
          <h2 className="blue__banner__texts_title">56+M</h2>
          <p className="blue__banner__texts_para">Verified users</p>
        </div>
      </div>
    </div>
  );
};

export default BlueBanner;
