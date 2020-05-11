import React, {useState} from "react";
import GameContainer from "../shared/GameContainer";
import Timer from "./Timer"

const Game = () => {
	const [maxTime, setMaxTime] = useState(5);
	const [isTimerOn, setIsTimerOn] = useState(true);
	const [initTime, setInitTime] = useState(Date.now() / 1000);

	const gameOver = () => {
		alert("Timer is done!");
		setIsTimerOn(false);

/* 		// Simulate a new game
		setTimeout(() => {
			newGame(10);
		}, 3000); */
	}

	const newGame = (gameTime) => {
		setMaxTime(gameTime);
		setIsTimerOn(true);
		setInitTime(Date.now() / 1000)
	}

	return (
	  <GameContainer>
		<h1>This will be the <em>GAME</em> page eventually</h1>
		<Timer maxCount={maxTime} onFinish={gameOver} enabled={isTimerOn} initTime={initTime}/>
		<button onClick={() => newGame(10)}>Start a new game</button>
	</GameContainer>
	);
}

export default Game;