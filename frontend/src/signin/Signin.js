import React from "react";
import GameContainer from "../shared/GameContainer";
import ActionButton from "../shared/ActionButton";
import GoBackButton from "../shared/GoBackButton";

const Signin = () => {
  return (
    <div className="App">
      <GameContainer>
        <div className="yellow-part">
          <h1 className="heading1"> Enter Your Unique Username </h1>
          <p className="text1">this is the unique username given to you when you signed up</p>
          <div className="signinbutton">
            <ActionButton to="/game" />
          </div>
          <GoBackButton/>
        </div>
      </GameContainer>
    </div>
  );
}

export default Signin;
