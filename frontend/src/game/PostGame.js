import React from "react";
import GameContainer  from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import ExitGameButton from "./ExitGameButton";
import DiverCard from "../shared/DiverCard";


const PostGame = ({points}) => {
  const handleClick = () => {
    window.location.reload();
  }

	return (
		<GameContainer>
      <div className='yellow-part'>
			  <h1 className='heading-postgame'>Woah! What a dive!</h1>
        <p className='postgame-content'>We've just updated your new total on your diver certification card</p>
        <DiverCard points = {points}/>
        <div className='play-again-button'>
          <ActionButton onClick={handleClick} to="/game" buttonText={"Dive Again"} />
        </div>
        <ExitGameButton/>
      </div>
		</GameContainer>
	);
}

export default PostGame;
