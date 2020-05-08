import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";

import MouseOverPopover from "../shared/GenericPopover";
import {makeStyles}     from "@material-ui/core/styles";

const FrontPage = () => {
  const useStyles = makeStyles((theme) => ({
    popover: {
      margin: "20px"
    }
  }));

  const classes = useStyles();

  const popover = (
    <div className={classes.popover}>
      <h1>Hi I'm the popover message!</h1>
      <p>We are Dumpster Divers, welcome!</p>
    </div>
  )

  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <GameContainer>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <ActionButton to="/game" buttonText={"Dive In!"}/>
        </GameContainer>
      </header>
    </div>
  );
};

export default FrontPage;
