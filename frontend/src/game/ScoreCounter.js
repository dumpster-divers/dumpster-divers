import React from "react";

const ScoreCounter = ({score}) => {

    return (
        <div className="scoreCounter">
            <p>{score}</p>
        </div>
    )
}

export default ScoreCounter;