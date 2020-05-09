import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";

const FrontPage = () => {
  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <GameContainer>
          <img src={logo} className="App-logo" alt="logo" />
          <div class="Small-link-div">
            <Link to="/signup" class="Small-link">Sign Up</Link>
            <Link to="/signin" class="Small-link">Sign In</Link>
          </div>
          <ActionButton to="/game" buttonText={"Dive In!"}/>
        </GameContainer>
      </header>
    </div>
  );
};

export default FrontPage;
