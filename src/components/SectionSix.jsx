import React from "react";
import "../assets/styles.css";
import SquareLogo from "../assets/images/logos/Square_logo.svg";
import EbayLogo from "../assets/images/logos/ebay_logo.svg";
import SpotifyLogo from "../assets/images/logos/spotify_logo.svg";
import CiscoLogo from "../assets/images/logos/cisco_logo.svg";

const TrustedBy = () => {
  return (
    <div className="container">
      <div className="trusted-container">
        <h2>Trusted by over 100,000 customers world-wide</h2>
        <div className="logos">
          <div className="logo">
            <img src={SquareLogo} alt="Square" />
          </div>
          <div className="logo">
            <img src={EbayLogo} alt="eBay" />
          </div>
          <div className="logo">
            <img src={SpotifyLogo} alt="Spotify" />
          </div>
          <div className="logo">
            <img src={CiscoLogo} alt="Cisco" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
