import React, {useState} from "react";
import GameContainer from "../shared/GameContainer";
import Timer from "./Timer"

const Game = () => {
/* 	// Dummy counter logic
	const counterDuration = 30;
	// Use datetime over subtracting one to continue the timer when tabbed out
	const [initTime] = useState(Date.now() / 1000);
	const [counter, setCounter] = useState(counterDuration);

	setInterval(() => {
		setCounter(Math.max(counterDuration - (Date.now() / 1000 - initTime), 0));
	}, 1000);
 */
	return (
	  <GameContainer>
		<h1>This will be the <em>GAME</em> page eventually</h1>
		<Timer maxCount={30}/>
	</GameContainer>
	);
}

export default Game;