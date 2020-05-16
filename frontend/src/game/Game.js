import React, {useState} from "react";
import GameContainer  from "../shared/GameContainer";
import GenericPopover from "../shared/GenericPopover";
import {makeStyles}   from "@material-ui/core/styles";
import IncorrectBinModal from "./IncorrectBinModal";
import ScoreCounter from "./ScoreCounter";
import Timer from "./Timer";

import RecycleBin      from "./RecycleBin";
import TrashBin        from "./TrashBin";
import Backend         from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Trash           from "./Trash";
import {getTrash}      from "./GameUtil";

//dummy trash object for now
const trashApple = {
	id: 1,
	info: "this is why you're wrong blah blah blah blah",
}

const timesUp = {
	id: 2,
	info: "Bruh cmon you ran out of time!!!"
}

const Game = ({points, setPoints}) => {
	const [maxTime, setMaxTime] = useState(5);
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [currentTrash, setCurrentTrash] = useState(getTrash())
	const [isIncorrectModalOpen, setIncorrectModalOpen] = useState(false);
	const [isTimeOutModalOpen, setTimeOutModalOpen] = useState(false);
	const [isStarted, setIsStarted] = useState(false);

	let trashElement = <Trash currentTrash={currentTrash} />;
	const handleDrop = (x, y, recycable) => {
		console.log(x, y);
		setCurrentTrash(getTrash());
		trashElement = (<Trash currentTrash={currentTrash}/>);
		if (x.recyclable === recycable) {
			setPoints(points => points + 1);
		} else {
			setIncorrectModalOpen(true);
			setIsStarted(false);
			setIsTimerOn(false);
		}
	}

	const handleIncorrectModalClose = () => {
		setIncorrectModalOpen(false);
	}

	const handleTimeOutModalClose = () => {
		setTimeOutModalOpen(false);
	}

	const handleTimeOut = () => {
		setTimeOutModalOpen(true);
		setIsTimerOn(false);
		setIsStarted(false);
	}

	const newGame = (gameTime) => {
		setMaxTime(gameTime);
		setIsTimerOn(true);
		setIsStarted(true);
		setPoints(0);
	}

	return (
		<GameContainer>
			<div id="timer">
				<Timer maxCount={maxTime} onFinish={handleTimeOut} enabled={isTimerOn}/>
			</div>
			<button onClick={() => newGame(10)}>Start a new game</button>
			<GenericPopover popover={HeaderPopover()}>
				<h1>This will be the <em>GAME</em> page eventually</h1>
			</GenericPopover>     
			<DndProvider backend={Backend}>
				{isStarted && trashElement}
				<br/>
				<TrashBin onDrop={handleDrop}/>
				<RecycleBin onDrop={handleDrop}/>
				<ScoreCounter score={points} />
			</DndProvider>
			<IncorrectBinModal trashInfo={trashApple.info} isOpen={isIncorrectModalOpen} onClose={handleIncorrectModalClose}/>
			<IncorrectBinModal trashInfo={timesUp.info} isOpen={isTimeOutModalOpen} onClose={handleTimeOutModalClose}/>
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
