import React, { useState } from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import LostAccountForm from "./LostAccountForm";
import CantFindEmailModal from "./CantFindEmailModal";
import { Link } from "react-router-dom";

const LostAccount = () => {
  const [errorVisible, setErrorVisible] = useState(false);
  const handleError = () => {
    setErrorVisible(true);
  };
  const handleClose = () => {
    console.log("attempted to close");
    setErrorVisible(false);
  };

  return (
    <GameContainer>
      <h1 className="heading1"> Enter Your linked email address </h1>
      <p className="text1">
        Your unique username will be sent to your email.
        Unfortunately we cannot recover accounts that are not linked to an email address.
      </p>
      <div className="form-module">
        <LostAccountForm onError={handleError} />
      </div>
      <Link to="/signin">
        <GoBackButton />
      </Link>
      <CantFindEmailModal visible={errorVisible} onClose={handleClose} />
    </GameContainer>
  );
};

export default LostAccount;
