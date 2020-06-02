import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";
import LoginModule from "./LoginModule";

import "./frontPageStyles.css";
import GlobalTally from "../shared/GlobalTally";
import { isMobile } from "../utilities/display";
import UserButton from "./UserButton";

const FrontPage = () => {
  return (
    <GameContainer>
      <div id="user-button">
        <UserButton />
      </div>
      <div className="dive-in">
        <GlobalTally />
        <h1 className="heading-homepage">Welcome to Dumpster Divers!</h1>
        <p className="about-us">
          {!isMobile() &&
            "Did you know that 61% of Australians are unclear on what could be " +
              "recycled? It may not be as easy as you think! Putting a recyclable item " +
              "in the incorrect bin or not treating a contaminated item correctly means " +
              "that recyclable items end up in the landfill. Dumpster Divers is here to " +
              "teach you all about household rubbish sorting in a fun way. Dive in with " +
              "us, you might be surprised!"}
        </p>
        <div id="mascot">
          <img src={logo} alt="logo" />
        </div>
        <div className="frontpage-button">
          <Link to="/game">
            <ActionButton to="/game" buttonText={"Dive In!"} />
          </Link>
        </div>
      </div>
      <LoginModule />
    </GameContainer>
  );
};

export default FrontPage;
