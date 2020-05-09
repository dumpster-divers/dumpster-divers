import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";
import GameContainer from "../shared/GameContainer";

const FrontPage = () => {
  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <GameContainer>
          <div class="Small-link-div">
            <Link to="/signup" class="Small-link">Sign Up</Link>
            <Link to="/signin" class="Small-link">Sign In</Link>
          </div>
          <div id="dumpster-diver">
            <img src="dumpster_diver.png" alt="dumpster diver mascot"/>
          </div>
          <div id="frontpage-button">
            <ActionButton to="/game" buttonText={"Dive In!"} />
          </div>
        </GameContainer>
      </header>
    </div>
  );
};

function moveDiver() {
  var elem = document.getElementById("dumpster-diver");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
    }
  }
}

export default FrontPage;
