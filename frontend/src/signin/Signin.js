import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import SignInForm from "./SignInForm";
import {Link} from "react-router-dom";

const Signin = () => {
  return (
    <div className="App">
      <GameContainer>
        <div className="yellow-part">
          <h1 className="heading1"> Enter Your Unique Username </h1>
          <p className="text1">
            this is the unique username given to you when you signed up
          </p>
          <div className="form-module">
            <SignInForm />
          </div>
          <Link to="/">
            <GoBackButton />
          </Link>
        </div>
      </GameContainer>
    </div>
  );
};

export default Signin;
