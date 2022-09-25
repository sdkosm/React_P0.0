import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
const Programs = () => {
  return (
    <div className="programs">
      <div className="header-programs">
        <span>Explore our </span>
        <span className="stroke-text">Programs </span>
        <span>to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
