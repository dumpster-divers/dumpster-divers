import React from "react";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-minimal.css";
import "./gameStyles.css";

const ScoreCounter = ({ score, style }) => {
  return (
    <div className="scoreCounter">
      <ReactOdometer value={score} style={style} />
    </div>
  );
};

export default ScoreCounter;
