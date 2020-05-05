import React from "react";
import logo from "../assets/dumpster_diver.png";
import "../App.css";
import TallyCounter from "../TallyCounter";
import ActionButton from "../shared/ActionButton";

import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count is <TallyCounter />
        </p>
        <Link to="/game">Dive In</Link>
        <Link to="/signup">Sign Up</Link>
        <ActionButton />
      </header>
    </div>
  );
};

export default FrontPage;
