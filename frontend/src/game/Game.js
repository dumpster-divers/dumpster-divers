import React, { useState } from "react";
import GameContainer from "../shared/GameContainer";
import { makeStyles } from "@material-ui/core/styles";
import IncorrectBinModal from "./IncorrectBinModal";
import ScoreCounter from "./ScoreCounter";
import Timer from "./Timer";

import RecycleBin from "./RecycleBin";
import TrashBin from "./TrashBin";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Trash from "./Trash";
import { getTrash } from "./GameUtil";
import TrashHolder from "./TrashHolder";

//dummy trash object for now
const trashApple = {
  id: 1,
  info: "this is why you're wrong blah blah blah blah"
};

const Game = () => {
  const [maxTime, setMaxTime] = useState(5);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [currentTrash, setCurrentTrash] = useState(getTrash());
  const [points, setPoints] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  let trashElement = <Trash currentTrash={currentTrash} />;
  const handleDrop = (x, y, recycable) => {
    console.log(x, y);
    setCurrentTrash(getTrash());
    trashElement = <Trash currentTrash={currentTrash} />;
    if (x.recyclable === recycable) {
      setPoints(points => points + 1);
    } else {
      setModalOpen(true);
      setIsStarted(false);
      setIsTimerOn(false);
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const gameOver = () => {
    setIsTimerOn(false);
    setIsStarted(false);
  };

  const newGame = gameTime => {
    setMaxTime(gameTime);
    setIsTimerOn(true);
    setIsStarted(true);
    setPoints(0);
  };

  return (
    <GameContainer>
      <div id="timer">
        <Timer maxCount={maxTime} onFinish={gameOver} enabled={isTimerOn} />
      </div>
      <button onClick={() => newGame(10)}>Start a new game</button>
      <DndProvider backend={Backend}>
        <div className="gameCenterWrapper">
          <TrashHolder visible={isStarted}>{trashElement}</TrashHolder>
          <br />
          <div className="bins">
            <TrashBin className="trash-bin" onDrop={handleDrop} />
            <RecycleBin className="recycle-bin" onDrop={handleDrop} />
          </div>
          <ScoreCounter score={points} />
        </div>
      </DndProvider>
      <IncorrectBinModal
        trashInfo={trashApple.info}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </GameContainer>
  );
};

const HeaderPopover = () => {
  const useStyles = makeStyles(theme => ({
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
};

export default Game;
