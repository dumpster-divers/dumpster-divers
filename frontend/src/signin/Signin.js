import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import SignInForm from "./SignInForm";
import CantFindUserModal from "./CantFindUserModal";

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
          <GoBackButton />
          <CantFindUserModal/>
        </div>
      </GameContainer>
    </div>
  );
};

export default Signin;
