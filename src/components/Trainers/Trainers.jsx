import React from "react";
import "./Trainers.css";
import { TrainersData } from "../../data/trainersData";
import { useState } from "react";
import LeftArrow from "./../../assets/leftArrow.png";
import RightArrow from "./../../assets/rightArrow.png";
const Trainers = () => {
  const [selected, setSelected] = useState(0);
  const dataLength = TrainersData.length;
  return (
    <div className="trainers">
      <div className="left-t">
        <span>Trainers</span>
        <span className="stroke-text">What They Are</span>
        <span>{TrainersData[selected].experience}</span>
        <span>
          <span>-{TrainersData[selected].name} </span>
          <span>({TrainersData[selected].status})</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={TrainersData[selected].image} alt="trainers" />
        <div className="arrow">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(dataLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={LeftArrow}
            alt="arrow"
          />
          <img
            onClick={() => {
              selected === dataLength - 1
                ? setSelected(0)
                : setSelected((next) => next + 1);
            }}
            src={RightArrow}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Trainers;
