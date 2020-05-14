import React from "react";
import {Link} from "react-router-dom";

const LoginModule = ({loggedIn}) => {

  const loggedInMessage = (
    <div className="Small-link-div">
      <div className="Small-link">
        Welcome back, username!
        <a style={{marginLeft: "10px"}}>
          Logout
        </a>
      </div>
    </div>
  )

  const loginSignUpModule = (
    <div className="Small-link-div">
      <Link to="/signup" className="Small-link">
        Sign Up
      </Link>
      <Link to="/signin" className="Small-link">
        Sign In
      </Link>
    </div>
  )

  return loggedIn ? loggedInMessage : loginSignUpModule;

}

export default LoginModule;
