import React, { useEffect, useState } from "react";
import GameContainer from "../shared/GameContainer";
import ExitGameButton from "../game/ExitGameButton";
import DiverCard from "./DiverCard";
import EmailUsernameModal from "../signup/EmailUsernameModal";
import "./userHomepageStyles.css";
import { isLoggedIn } from "../utilities/userManager";
import { Redirect } from "react-router-dom";

const UserHomepage = () => {
  let [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
  });
  if (!isLoggedIn()) {
    return (
      <GameContainer>
        <h1 style={{ color: "#4d4125" }}>
          You need to be logged in to see this
        </h1>

        <div style={{ color: "#4d4125" }}>
          Redirecting to home page{".".repeat(seconds + 1)}
        </div>
        {seconds >= 3 && <Redirect to="/" />}
      </GameContainer>
    );
  }
  return (
    <GameContainer>
      <div className="yellow-part">
        <div style={{ marginTop: "8%", marginBottom:"2%" }}>
          <DiverCard />
        </div>
        <ExitGameButton />
        <div className="modal-button">
          <EmailUsernameModal />
        </div>
      </div>
    </GameContainer>
  );
};

export default UserHomepage;
