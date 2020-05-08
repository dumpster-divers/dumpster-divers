import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";

import ReactHover       from 'react-hover';
import { makeStyles }   from '@material-ui/core/styles';
import Card             from '@material-ui/core/Card';
import CardActions      from '@material-ui/core/CardActions';
import CardContent      from '@material-ui/core/CardContent';
import Button           from '@material-ui/core/Button';
import Typography       from '@material-ui/core/Typography';
import MouseOverPopover from "../shared/GenericPopover";

const FrontPage = () => {
  const popover = (
    <Typography>Hi I'm the popover message!</Typography>
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
