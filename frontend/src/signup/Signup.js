import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <GameContainer>
      <h1 className="heading1"> Sign Up </h1>
      <p className="text1">
        it's quick and easy, just enter your name (this will be shown publicly
        in highscores)
      </p>
      <div className="form-module">
        <SignUpForm />
      </div>
      <Link to="/">
        <GoBackButton />
      </Link>
    </GameContainer>
  );
};

export default Signup;
