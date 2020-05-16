import React, {useEffect, useRef, useState} from "react";
import GameContainer                        from "../shared/GameContainer";
import IncorrectBinModal from "./IncorrectBinModal";
import ScoreCounter from "./ScoreCounter";
import Timer from "./Timer";

import RecycleBin      from "./RecycleBin";
import TrashBin        from "./TrashBin";
import Backend         from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Trash           from "./Trash";
import {fetchTrash}    from "../utilities/gameManager";
import TrashHolder from "./TrashHolder";

//dummy trash object for now
const trashApple = {
  id: 1,
  info: "this is why you're wrong blah blah blah blah"
};

const timesUp = {
	id: 2,
	info: "Bruh cmon you ran out of time!!!"
}

const Game = ({points, setPoints, setShowGame}) => {
	const [maxTime, setMaxTime] = useState(5);
	const [isTimerOn, setIsTimerOn] = useState(false);
	const [currentTrash, setCurrentTrash] = useState(null);
	const [isIncorrectModalOpen, setIncorrectModalOpen] = useState(false);
	const [isTimeOutModalOpen, setTimeOutModalOpen] = useState(false);
	const [isStarted, setIsStarted] = useState(false);
	const [allTrash, setAllTrash] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const isIncorrectModalOpenRef = useRef(isIncorrectModalOpen)
	isIncorrectModalOpenRef.current = isIncorrectModalOpen

	useEffect(() => {
		const fetchData = async () => {
			const fetchedTrash = await fetchTrash();
			setAllTrash(fetchedTrash);
			setCurrentTrash(fetchedTrash[0]);
			setIsLoading(false);
		}

		fetchData();
	},
		[]);

	let trashElement = <Trash currentTrash={currentTrash} />;
	const handleDrop = (x, y, recyclable) => {
		setCurrentTrash(sampleTrash());
		console.log(currentTrash);
		trashElement = (<Trash currentTrash={currentTrash}/>);
		if (x.recyclable === recyclable) {
			setPoints(points => points + 1);
		} else {
			setIncorrectModalOpen(true);
			setIsStarted(false);
			setIsTimerOn(false);
		}
	}

	const sampleTrash = () => {
		return allTrash[Math.floor(Math.random() * allTrash.length)]
	}

	const handleIncorrectModalClose = () => {
		setIncorrectModalOpen(false);
		setShowGame(false);
	}

	const handleTimeOutModalClose = () => {
		setTimeOutModalOpen(false);
		setShowGame(false);
	}

	const handleTimeOut = () => {
		if (!isIncorrectModalOpenRef.current) {
			setTimeOutModalOpen(true);
		}
		setIsTimerOn(false);
		setIsStarted(false);
	}

	const newGame = async (gameTime) => {
		setMaxTime(gameTime);
		setIsTimerOn(true);
		setIsStarted(true);
	}

	if (isLoading) {
		return <p>Loading!</p>
	}

  return (
    <GameContainer>
      <button onClick={() => newGame(10)}>Start a new game</button>
      <DndProvider backend={Backend}>
        <div className="gameCenterWrapper">
          <TrashHolder visible={isStarted}>{trashElement}</TrashHolder>
          <br />
          <div className="bins">
            <TrashBin className="trash-bin" onDrop={handleDrop} />
            <RecycleBin className="recycle-bin" onDrop={handleDrop} />
          </div>
        </div>
      </DndProvider>
      <ScoreCounter score={points} />
      <div id="timer">
        <Timer maxCount={maxTime} onFinish={handleTimeOut} enabled={isTimerOn} />
      </div>
      <IncorrectBinModal
        trashInfo={trashApple.info}
        isOpen={isIncorrectModalOpen}
        onClose={handleIncorrectModalClose}
      />
			<IncorrectBinModal
				trashInfo={timesUp.info}
				isOpen={isTimeOutModalOpen}
				onClose={handleTimeOutModalClose}
			/>
    </GameContainer>
  );
};

export default Game;
