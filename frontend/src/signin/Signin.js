import React from "react";
import GameContainer from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import GoBackButton from "../shared/GoBackButton";

const Signin = () => {
  return (
    <GameContainer>
      <h1 className="heading1"> Enter Your Unique Username </h1>
      <p className="text1">
        this is the unique username given to you when you signed up
      </p>
      <div className="userForm">
        <ActionButton to="/game" />
      </div>
      <GoBackButton />
    </GameContainer>
  );
};

export default Signin;
