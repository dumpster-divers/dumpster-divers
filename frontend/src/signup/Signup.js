import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import SignUpForm from "./SignUpForm";

const Signup = () => {
  return (
    <GameContainer>
      <div className="yellow-part">
        <h1 className="heading1"> Sign Up </h1>
        <p className="text1">
          it's quick and easy, just enter your name (this will be shown publicly
          in highscores)
        </p>
        <div className="form-module">
          <SignUpForm />
        </div>
        <GoBackButton />
      </div>
    </GameContainer>
  );
};

export default Signup;
