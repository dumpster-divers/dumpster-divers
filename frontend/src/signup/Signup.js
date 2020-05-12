import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import SignUpForm from "./SignUpForm";

const Signup = () => {
  return (
    <GameContainer>
      <h1 class="heading1"> Sign Up </h1>
      <p class="text1">it's quick and easy, just enter any username that you want to use</p>
      <div class="signupbutton">
        <SignUpForm />
      </div>
      <GoBackButton/>
    </GameContainer>
  );
};

export default Signup;
