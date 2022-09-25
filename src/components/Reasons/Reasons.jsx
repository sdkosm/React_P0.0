import React from "react";
import "./Reasons.css";
import img1 from "../../assets/sfc1.jpeg";
import img2 from "../../assets/sfc2.jpeg";
import img3 from "../../assets/sfc3.jpeg";
import img4 from "../../assets/sfc4.jpeg";
const Reasons = () => {
  return (
    <div className="reasons">
      <div className="whyus">
        <span>
          Why <span className="stroke-text">choose</span> us
        </span>{" "}
      </div>
      <div className="gym-images">
        <div className="gym-img">
          <img src={img1} alt="img1" className="images" />
          <img src={img2} alt="img2" className="images" />
          <img src={img3} alt="img3" className="images" />
          <img src={img4} alt="img4" className="images" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
