import React from "react";
import "./Plans.css";
import whiteTick from "./../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className="plans">
      <div className="blur blur-plans-1"></div>
      <div className="blur blur-plans-2"></div>
      <div className="plans-header">
        <span>ready to start your journey</span>
      </div>
      <div className="data">
        {plansData.map((plan, i) => (
          <div className="plan" key={1}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> Rs.{plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="plans" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
