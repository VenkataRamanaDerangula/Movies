import React from "react";
import "../assets/styles.css";

const TrustedBy = () => {
  return (
    <div className="container">
      <div className="trusted-container">
        <h2>Trusted by over 100,000 customers world-wide</h2>
        <div className="logos">
          <div className="logo">
            <img
              src="https://github.com/VenkataRamanaDerangula/TaskFlow/blob/main/images/logos/Square%20Logo.svg"
              alt="Square"
            />
          </div>
          <div className="logo">
            <img
              src="https://github.com/VenkataRamanaDerangula/TaskFlow/blob/main/images/logos/ebay%20logo.svg"
              alt="eBay"
            />
          </div>
          <div className="logo">
            <img
              src="https://github.com/VenkataRamanaDerangula/TaskFlow/blob/main/images/logos/Spotify%20logo.svg"
              alt="Spotify"
            />
          </div>
          <div className="logo">
            <img
              src="https://github.com/VenkataRamanaDerangula/TaskFlow/blob/main/images/logos/Cisco%20Logo.svg"
              alt="Cisco"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
