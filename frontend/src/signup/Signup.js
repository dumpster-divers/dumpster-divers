import React from "react";
import GameContainer from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import GoBackButton from "../shared/GoBackButton";

const Signup = () => {
  return (
    <GameContainer>
      <h1> Sign Up </h1>
      <p>it's quick and easy, just enter any username that you want to use</p>
      <ActionButton to="/game" />
    <GoBackButton/>
    </GameContainer>
  );
}

export default Signup;
