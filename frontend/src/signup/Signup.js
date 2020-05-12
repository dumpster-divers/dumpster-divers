import React from "react";
import GameContainer from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import GoBackButton from "../shared/GoBackButton";

const Signup = () => {
  return (
    <GameContainer>
      <div className="yellow-part">
        <h1 className="heading1"> Sign Up </h1>
        <p className="text1">it's quick and easy, just enter any username that you want to use</p>
        <div clasNames="signupbutton">
          <ActionButton to="/game" />
        </div>
        <GoBackButton/>
      </div>
    </GameContainer>
  );
}

export default Signup;
