import React from "react";
import { Link } from "react-router-dom";
import { getName, isLoggedIn, logoutUser } from "../utilities/userManager";

const LoginModule = () => {
  const loggedInMessage = (
    <div className="Small-link-div">
      <div className="Small-link">
        Welcome back, {getName()}!
        <a style={{ marginLeft: "10px" }} href="/" onClick={logoutUser}>
          Logout
        </a>
      </div>
    </div>
  );

  const loginSignUpModule = (
    <div className="Small-link-div">
      <Link to="/signup" className="Small-link">
        Sign Up
      </Link>
      <Link to="/signin" className="Small-link">
        Sign In
      </Link>
    </div>
  );

  return isLoggedIn() ? loggedInMessage : loginSignUpModule;
};

export default LoginModule;
