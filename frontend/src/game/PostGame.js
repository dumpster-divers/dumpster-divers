import React from "react";
import GameContainer from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import ExitGameButton from "./ExitGameButton";
import DiverCard from "../shared/DiverCard";
import { isLoggedIn } from "../utilities/userManager";
import PostGameLoginLogoutFlow from "./PostGameLoginLogoutFlow";

const PostGame = ({ points }) => {
  const handleClick = () => {
    window.location.reload();
  };

  const headingText = points > 5 ? "Woah! What a dive!" : "Nice try!";

  return (
    <GameContainer>
      <div className="yellow-part">
        <h1 className="heading-postgame">{headingText}</h1>
        <p className="postgame-content">
          {isLoggedIn() ? (
            <>
              We've just updated your new total on your diver certification card
            </>
          ) : (
            <PostGameLoginLogoutFlow points={points} />
          )}
        </p>
        <div style={{ marginTop: "8%" }}>
          <DiverCard points={points} />
        </div>
        <div className="frontpage-button">
          <ActionButton
            onClick={handleClick}
            to="/game"
            buttonText={"Dive Again"}
          />
        </div>
        <ExitGameButton />
      </div>
    </GameContainer>
  );
};

export default PostGame;
