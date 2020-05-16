import React, {useEffect, useState} from "react";
import PostGame                     from "./PostGame";
import Game                from "./Game";
import {postSessionStats}  from "../utilities/gameManager";

const GamePage = () => {
  const [showGame, setShowGame] = useState(true);
  const [points, setPoints] = useState(0);

  if (showGame) {
    return (
      <Game points={points} setPoints={setPoints} setShowGame={setShowGame} />
    );
  } else {
    return <PostGame points={points} />;
  }
};

export default GamePage;
