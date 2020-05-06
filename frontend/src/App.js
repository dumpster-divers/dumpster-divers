import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FrontPage from "./frontpage/FrontPage";
import Game from "./Game";
import Signup from "./Signup";

export default function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}
