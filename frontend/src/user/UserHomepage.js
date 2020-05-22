import React from "react";
import GameContainer from "../shared/GameContainer";
import ExitGameButton from "../game/ExitGameButton";
import DiverCard from "./DiverCard";
import UpdateUserForm from "./UpdateUserForm";
import UserStats from "./UserStats";
import DiverCard2 from "./DiverCard2";

const UserHomepage = () => {
  return (
    <GameContainer>
      <div className="yellow-part">
        <div style={{ marginTop: "8%" }}>
          <DiverCard2 />
        </div>
        <ExitGameButton />
        <UpdateUserForm />
      </div>
    </GameContainer>
  );
};



export default UserHomepage;
