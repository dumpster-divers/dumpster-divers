import React, { useState } from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import SignInForm from "./SignInForm";
import CantFindUserModal from "./CantFindUserModal";
import { Link } from "react-router-dom";

const Signin = () => {
  let [errorVisible, setErrorVisible] = useState(false);
  const handleError = () => {
    setErrorVisible(true);
  };
  const handleClose = () => {
    console.log("attempted to close");
    setErrorVisible(false);
  };

  return (
    <GameContainer>
      <h1 className="heading1"> Enter Your Unique Username </h1>
      <p className="text1">
        this is the unique username given to you when you signed up
      </p>
      <div className="form-module">
        <SignInForm onError={handleError} />
      </div>
      <Link to="/">
        <GoBackButton />
      </Link>
      <CantFindUserModal visible={errorVisible} onClose={handleClose} />
    </GameContainer>
  );
};

export default Signin;
