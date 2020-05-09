import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";

const FrontPage = () => {
  return (
    <GameContainer>
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <ActionButton to="/game" />
    </GameContainer>
  );
};

export default FrontPage;
