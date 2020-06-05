import React from "react";
import GameContainer from "../shared/GameContainer";
import ExitGameButton from "../game/ExitGameButton";
import DiverCard from "./DiverCard";
import "./userHomepageStyles.css";

const UserHomepage = () => {
  return (
    <GameContainer>
      <div className="yellow-part">
        <div style={{ marginTop: "8%", marginBottom:"2%" }}>
          <DiverCard />
        </div>
        <ExitGameButton />
      </div>
    </GameContainer>
  );
};



export default UserHomepage;
