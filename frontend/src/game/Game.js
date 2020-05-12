import React, {useState} from "react";
import GameContainer from "../shared/GameContainer";
import Timer from "./Timer"

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
			<h1>This will be the <em>GAME</em> page eventually</h1>
			<Timer maxCount={maxTime} onFinish={gameOver} enabled={isTimerOn}/>
			<button onClick={() => newGame(10)}>Start a new game</button>
		</GameContainer>
	);
}

export default Game;