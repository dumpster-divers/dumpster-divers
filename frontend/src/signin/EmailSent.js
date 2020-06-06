import React, { useState } from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import LostAccountForm from "./LostAccountForm";
import CantFindEmailModal from "./CantFindEmailModal";
import { Link } from "react-router-dom";

const EmailSent = () => {
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
      <h1 className="heading1"> An email has been sent! </h1>
      <p className="text1">
        please check your inbox for your unique username
      </p>
      <Link to="/signin">
        <GoBackButton />
      </Link>
    </GameContainer>
  );
};

export default EmailSent;
