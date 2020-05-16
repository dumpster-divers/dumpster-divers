import React from "react";
import GameContainer from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import ExitGameButton from "../game/ExitGameButton";
import DiverCard from "../shared/DiverCard";
import {getName, getUsername} from "../utilities/userManager";
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
