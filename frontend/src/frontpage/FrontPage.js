import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";

import ReactHover from 'react-hover';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const FrontPage = () => {
  const options = {
    followCursor: true,
    shiftX: 10,
    shiftY: -10
  }

  const classes = makeStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const card = (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );

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
