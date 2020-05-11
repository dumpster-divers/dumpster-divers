import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FrontPage from "./frontpage/FrontPage";
import Game from "./game/Game";
import Signup from "./signup/Signup";
import Signin from "./signin/Signin";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
