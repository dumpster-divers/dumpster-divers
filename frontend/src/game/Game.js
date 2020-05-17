import React, { useEffect, useRef, useState } from "react";
import GameContainer from "../shared/GameContainer";
import IncorrectBinModal from "./IncorrectBinModal";
import ScoreCounter from "./ScoreCounter";
import Timer from "./Timer";
import { Images } from "./Images";
import RecycleBin from "./RecycleBin";
import TrashBin from "./TrashBin";
import Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import Trash from "./Trash";
import { getTrash, postSessionStats } from "../utilities/gameManager";
import TrashHolder from "./TrashHolder";
import ActionButton from "../shared/ActionButton";
import Preload from "react-preload";
import TimeOutModal from "./TimeOutModal";
import HowToPlayModal from "./HowToPlayModal";

const Game = ({ points, setPoints, setShowGame }) => {
  const [maxTime, setMaxTime] = useState(5);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [currentTrash, setCurrentTrash] = useState(null);
  const [isIncorrectModalOpen, setIncorrectModalOpen] = useState(false);
  const [isTimeOutModalOpen, setTimeOutModalOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [allTrash, setAllTrash] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isIncorrectModalOpenRef = useRef(isIncorrectModalOpen);
  isIncorrectModalOpenRef.current = isIncorrectModalOpen;

  const GAME_DURATION = 10;

  // Handling touch vs mouse dragging
  const backend = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? TouchBackend
    : Backend;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTrash = await getTrash();
      setAllTrash(fetchedTrash);
      setCurrentTrash(fetchedTrash[0]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  let trashElement = <Trash currentTrash={currentTrash} />;
  const handleDrop = (trash, bin, recyclable) => {
    let oldTrash = currentTrash;
    setCurrentTrash(sampleTrash());
    trashElement = <Trash currentTrash={currentTrash} />;
    if (trash.recyclable === recyclable) {
      setPoints((points) => points + 1);
    } else {
      // So the currentTrash.info in Incorrect Modal is about the right one
      setCurrentTrash(oldTrash);

      setIncorrectModalOpen(true);
      setIsStarted(false);
      setIsTimerOn(false);
    }
  };

  // Selects a random trash from allTrash
  const sampleTrash = () => {
    return allTrash[Math.floor(Math.random() * allTrash.length)];
  };

  const handleIncorrectModalClose = async () => {
    setIncorrectModalOpen(false);
    setShowGame(false);
    await postSessionStats(points);
  };

  const handleTimeOutModalClose = async () => {
    setTimeOutModalOpen(false);
    setShowGame(false);
    await postSessionStats(points);
  };

  const handleHowToPlayModalClose = () => {
    handleNewGame(GAME_DURATION);
  };

  const handleTimeOut = () => {
    // Don't show both modals at the same time
    if (!isIncorrectModalOpenRef.current) {
      setTimeOutModalOpen(true);
    }
    setIsTimerOn(false);
    setIsStarted(false);
  };

  const handleNewGame = async (gameTime) => {
    setMaxTime(gameTime);
    setIsTimerOn(true);
    setIsStarted(true);
  };

  if (isLoading) {
    return <p>Loading!</p>;
  }

  return (
    <Preload loadingIndicator={<p>Loading!</p>} images={Images}>
      <GameContainer>
        <HowToPlayModal
          isOpen={!isStarted}
          onClose={handleIncorrectModalClose}
        />
        <div className="play-button">
          <ActionButton
            onClick={() => handleNewGame(GAME_DURATION)}
            disabled={isStarted}
            buttonText={"Let's Dive!"}
          />
        </div>
        <DndProvider backend={backend}>
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
          <Timer
            maxCount={maxTime}
            onFinish={handleTimeOut}
            enabled={isTimerOn}
          />
        </div>
        <IncorrectBinModal
          trashInfo={currentTrash.info}
          isOpen={isIncorrectModalOpen}
          onClose={handleIncorrectModalClose}
        />
        <TimeOutModal
          isOpen={isTimeOutModalOpen}
          onClose={handleTimeOutModalClose}
        />
      </GameContainer>
    </Preload>
  );
};

export default Game;
