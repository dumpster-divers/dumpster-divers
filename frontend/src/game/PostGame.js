import React from "react";
import GameContainer  from "../shared/GameContainer";
import diver_cert_card from "../assets/diver_cert_card.png";
import ActionButton from "../shared/ActionButton";
import ExitGameButton from "./ExitGameButton";


const PostGame = () => {
  const handleClick = () => {
    window.location.reload();
  }

	return (
		<GameContainer>
      <div className='yellow-part'>
			  <h1 className='heading-postgame'>Woah! What a dive!</h1>
        <p className='postgame-content'>we've just updated your new total on your diver certification card</p>
        <img className='diver-cert-card' src={diver_cert_card} alt="diver certification card" />
        <div className='play-again-button'>
          <ActionButton onClick={handleClick} to="/game" buttonText={"Dive Again"} />
        </div>
        <ExitGameButton/>
      </div>
		</GameContainer>
	);
}

export default PostGame;
