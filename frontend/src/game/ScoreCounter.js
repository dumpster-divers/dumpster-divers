import React from "react";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
import "./gameStyles.css"; // CSS here

const ScoreCounter = ({ score, style }) => {
  console.log(style);
  return (
    <div className="scoreCounter">
      <ReactOdometer value={score} style={style} />
    </div>
  );
};

export default ScoreCounter;
