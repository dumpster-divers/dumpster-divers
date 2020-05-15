import React from "react";
import GameContainer  from "../shared/GameContainer";
import diver_cert_card from "../assets/diver_cert_card.png";


const PostGame = () => {
	return (
		<GameContainer>
			<h1>hi this is the post game page</h1>
      <img src={diver_cert_card} alt="diver certification card" />
		</GameContainer>
	);
}

export default PostGame;
