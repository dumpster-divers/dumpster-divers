import React, {useState} from "react";
import GameContainer  from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";
import {makeStyles}   from "@material-ui/core/styles";
import IncorrectBinModal from "./IncorrectBinModal";
import Timer from "./Timer";

import RecycleBin      from "./RecycleBin";
import TrashBin        from "./TrashBin";
import Backend         from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Trash           from "./Trash";
import {getTrash}      from "./GameUtil";

import TouchBackend from 'react-dnd-touch-backend'

const TouchBackendOptions = {
	enableMouseEvents: true
};

//dummy trash object for now
const trashApple = {
	id: 1,
	info: "this is why you're wrong blah blah blah blah",
}

const Game = () => {
	const [maxTime, setMaxTime] = useState(5);
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [currentTrash, setCurrentTrash] = useState(getTrash())
	const [points, setPoints] = useState(0);
	const [isModalOpen, setModalOpen] = useState(false);

	let trashElement = <Trash currentTrash={currentTrash} />;
	const handleDrop = (x, y, recycable) => {
		console.log(x, y);
		setCurrentTrash(getTrash());
		trashElement = (<Trash currentTrash={currentTrash}/>);
		if (x.recyclable === recycable) {
			setPoints(points => points + 1);
		} else {
			setModalOpen(true);
		}
	}

	const handleModalClose = () => {
		setModalOpen(false);
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
			<DndProvider backend={TouchBackend} options={TouchBackendOptions}>
				{trashElement}
				<TrashBin onDrop={handleDrop}/>
				<RecycleBin onDrop={handleDrop}/>
				<p>Points: {points}</p>
			</DndProvider>
			<IncorrectBinModal trashInfo={trashApple.info} isOpen={isModalOpen} onClose={handleModalClose}/>
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
