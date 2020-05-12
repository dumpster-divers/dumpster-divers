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
          <div className="yellow-part">
            <div className="frontpage-button">
              <Link to="/game">
                <ActionButton to="/game" buttonText={"Dive In!"} />
              </Link>
            </div>
            <div id="mascot">
              <img src={logo} alt="logo" />
            </div>
            <h1 className="heading-homepage">Welcome to Dumpster Divers</h1>
            <p className="about-us">about us description coming soon...</p>
            <div className="Small-link-div">
              <Link to="/signup" className="Small-link">Sign Up</Link>
              <Link to="/signin" className="Small-link">Sign In</Link>
            </div>
          </div>
        </GameContainer>
      </header>
    </div>
  );
};




export default FrontPage;
