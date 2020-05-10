import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

const FrontPage = () => {
  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <GameContainer>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
          <ActionButton to="/game" buttonText={"Dive In!"}/>
        </GameContainer>
      </header>
    </div>
  );
};

export default FrontPage;
