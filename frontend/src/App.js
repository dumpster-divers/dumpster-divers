import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FrontPage from "./frontpage/FrontPage";
import Game from "./game/Game";
import Signup from "./signup/Signup";

export default function App() {
  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
