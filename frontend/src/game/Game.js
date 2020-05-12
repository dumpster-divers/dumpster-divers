import React, {useState} from "react";
import {makeStyles} from '@material-ui/core';

import Timer from "./Timer";
import GameContainer from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";

const Game = () => {
	const [maxTime, setMaxTime] = useState(5);
	const [isTimerOn, setIsTimerOn] = useState(true);

	const gameOver = () => {
		alert("Timer is done!");
		setIsTimerOn(false);
	}

	const newGame = (gameTime) => {
		setMaxTime(gameTime);
		setIsTimerOn(true);
	}

	return (
		<GameContainer>
			<div id="timer">
				<Timer maxCount={maxTime} onFinish={gameOver} enabled={isTimerOn}/>
			</div>
			<button onClick={() => newGame(10)}>Start a new game</button>
			<GenericPopover popover={HeaderPopover()}>
				<h1>This will be the <em>GAME</em> page eventually</h1>
			</GenericPopover>
		</GameContainer>
	);
}

const HeaderPopover = () => {
	const useStyles = makeStyles((theme) => ({
		popover: {
			margin: "20px"
		}
	}));

	const classes = useStyles();

	 return (
		<div className={classes.popover}>
			<h1>Hey this is the popover</h1>
			<p>And this is the paragraph below!</p>
		</div>
	);
}

export default Game;