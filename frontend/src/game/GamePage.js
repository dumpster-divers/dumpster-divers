import React, {useState} from "react";
import PostGame          from "./PostGame";
import Game              from "./Game";

const GamePage = () => {
  const [showGame, setShowGame] = useState(true);
  const [points, setPoints] = useState(0);

  if (showGame) {
    return <Game points={points} setPoints={setPoints}/>;
  } else {
    return <PostGame/>
  }
}

export default GamePage;