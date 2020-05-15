import React, {useState} from "react";
import GameContainer  from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";
import {makeStyles}   from "@material-ui/core/styles";
import IncorrectBinModal from "./IncorrectBinModal";
import Timer from "./Timer";

import RecycleBin from "./RecycleBin";
import TrashBin   from "./TrashBin";
import Backend    from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Trash           from "./Trash";

//dummy trash object for now
const trashApple = {
	id: 1,
	info: "this is why you're wrong blah blah blah blah",
}

const Game = () => {
	const [maxTime, setMaxTime] = useState(5);
	const [isTimerOn, setIsTimerOn] = useState(true);

	const handleDrop = (x, y) => {
		console.log("HELLO!");
		console.log(x, y);
	}

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
			<DndProvider backend={Backend}>
				<Trash/>
				<TrashBin onDrop={handleDrop}/>
				<Trash isGood={false} />
				<RecycleBin onDrop={handleDrop}/>
			</DndProvider>
			<IncorrectBinModal trashInfo={trashApple.info}/>
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
