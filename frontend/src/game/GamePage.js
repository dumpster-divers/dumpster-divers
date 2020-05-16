import React, {useState} from "react";
import PostGame          from "./PostGame";

const GamePage = () => {
  const [showGame, setShowGame] = useState(true);

  if (showGame) {
    return <Game/>;
  } else {
    return <PostGame/>
  }
}