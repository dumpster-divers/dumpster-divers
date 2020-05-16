import React from "react";
import ReactOdometer from "react-odometerjs";
import 'odometer/themes/odometer-theme-minimal.css';
import "./gameStyles.css"

const ScoreCounter = ({score}) => {
    return (
        <div className="scoreCounter">
            <ReactOdometer value = {score} />
        </div>
    )
}

export default ScoreCounter;