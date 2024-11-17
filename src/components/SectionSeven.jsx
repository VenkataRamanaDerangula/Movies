import React from "react";
import "../assets/styles.css";
import PlanBg from "../assets/images/plan-bg.svg";
import PlanImg from "../assets/images/plan-img.webp";

const PricingSection = () => {
  return (
    <div className="container">
      <div className="container-2">
        <div className="left-section">
          <img
            className="bg-circle"
            src={PlanBg}
            alt="Background"
          />
          <img
            className="main-img"
            src={PlanImg}
            alt="Main"
          />
          <div className="price-tag individual">
            <p>Individual Pricing $14/month</p>
          </div>
          <div className="price-tag asana">
            <p>3 free projects, forever</p>
          </div>
          <div className="price-tag standalone">
            <p>7-day free-trial</p>
          </div>
          <div className="price-tag team">
            <p>Team pricing $30/month</p>
          </div>
        </div>
        <div className="right-section">
          <h1>Choose the plan that suits you best</h1>
          <p>
            We offer monthly and yearly subscriptions. Sign up for free, no
            credit card required.
          </p>
          <button>See pricing</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
