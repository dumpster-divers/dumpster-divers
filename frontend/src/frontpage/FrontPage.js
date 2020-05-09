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
          <div class="Small-link-div">
            <Link to="/signup" class="Small-link">Sign Up</Link>
            <Link to="/signin" class="Small-link">Sign In</Link>
          </div>
          <div id="frontpage-button">
            <ActionButton to="/game" buttonText={"Dive In!"} />
            <div id="move-diver">
              <img src={logo} id="homepage-mascot" alt="logo" />
            </div>
          </div>
        </GameContainer>
      </header>
    </div>
  );
};




export default FrontPage;
