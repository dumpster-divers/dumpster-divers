import React from "react";
import GameContainer from "../shared/GameContainer";
import ExitGameButton from "../game/ExitGameButton";
import DiverCard from "./DiverCard";
import UpdateUserForm from "./UpdateUserForm";

const UserHomepage = () => {
  return (
    <GameContainer>
      <div className="yellow-part">
        <div style={{ marginTop: "8%" }}>
          <DiverCard />
        </div>
        <ExitGameButton />
        <UpdateUserForm />
      </div>
    </GameContainer>
  );
};



export default UserHomepage;
