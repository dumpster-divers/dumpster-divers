import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FrontPage from "./frontpage/FrontPage";
import Signup from "./signup/Signup";
import Signin from "./signin/Signin";
import PostSignUp from "./signup/PostSignUp";
import PostGame   from "./game/PostGame";
import UserHomepage from "./user/UserHomepage";
import LostAccount from "./signin/LostAccount";


import "./sharedStyles.css";
import GamePage from "./game/GamePage";

export default function App() {
  document.title = "Dumpster Divers";

  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/game">
              <GamePage />
            </Route>
            <Route path="/postgame">
              <PostGame />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/postsignup">
              <PostSignUp/>
            </Route>
            <Route path="/userhomepage">
              <UserHomepage/>
            </Route>
            <Route path="/lostaccount">
              <LostAccount />
            </Route>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}
