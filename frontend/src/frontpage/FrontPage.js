import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";
import LoginModule from "./LoginModule";

const FrontPage = () => {
  return (
    <div className="App">
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
            <LoginModule loggedIn={false}/>
          </div>
        </GameContainer>
      </header>
    </div>
  );
};

export default FrontPage;
