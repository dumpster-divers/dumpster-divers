import React, { useEffect, useRef, useState } from "react";
import GameContainer from "../shared/GameContainer";
import IncorrectBinModal from "./IncorrectBinModal";
import ScoreCounter from "./ScoreCounter";
import Timer from "./Timer";
import Images from "./Images";
import RecycleBin from "./RecycleBin";
import TrashBin from "./TrashBin";
import Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";
import Trash from "./Trash";
import {
  getTrash,
  postSessionStats,
  createHasPlayedCookie,
  hasPlayed,
} from "../utilities/gameManager";
import TrashHolder from "./TrashHolder";
import Preload from "react-preload";
import TimeOutModal from "./TimeOutModal";
import HowToPlayModal from "./HowToPlayModal";
import { isMobile } from "../utilities/display";

const Game = ({ points, setPoints, setShowGame }) => {
  const [maxTime, setMaxTime] = useState(5);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [currentTrash, setCurrentTrash] = useState(null);
  const [isIncorrectModalOpen, setIncorrectModalOpen] = useState(false);
  const [isTimeOutModalOpen, setTimeOutModalOpen] = useState(false);
  const [isHowToPlayModalOpen, setHowToPlayModalOpen] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [allTrash, setAllTrash] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checked, setChecked] = useState(false);

  const isIncorrectModalOpenRef = useRef(isIncorrectModalOpen);
  isIncorrectModalOpenRef.current = isIncorrectModalOpen;

  const GAME_DURATION = 20;

  // Handling touch vs mouse dragging
  const backend = isMobile() ? TouchBackend : Backend;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTrash = await getTrash();
      setAllTrash(fetchedTrash);
      setCurrentTrash(
        fetchedTrash[Math.floor(Math.random() * fetchedTrash.length)]
      );

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

  const startGame = () => {
    setMaxTime(GAME_DURATION);
    setIsTimerOn(true);
    setIsStarted(true);
  };

  const handleHowToPlayModalClose = () => {
    startGame();
    setHowToPlayModalOpen(false);
    if (checked) {
      createHasPlayedCookie();
    }
  };

  const handleTimeOut = () => {
    // Don't show both modals at the same time
    if (!isIncorrectModalOpenRef.current) {
      setTimeOutModalOpen(true);
    }
    setIsTimerOn(false);
    setIsStarted(false);
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  if (isLoading) {
    return <p>Loading!</p>;
  }

  return (
    <Preload loadingIndicator={<p>Loading!</p>} images={Images}>
      <GameContainer>
        <HowToPlayModal
          isOpen={isHowToPlayModalOpen}
          onClose={handleHowToPlayModalClose}
          onChecked={handleCheckboxChange}
        />
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
