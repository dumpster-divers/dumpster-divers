import React from "react";
import { Link } from "react-router-dom";
import { getName, isLoggedIn, logoutUser } from "../utilities/userManager";
import UserButton from "./UserButton";
import "./frontPageStyles.css";

const LoginModule = () => {
  const loggedInMessage = (
    <div>
      <div className="Small-link-div">
        <div className="Small-link">
          Welcome back, {getName()}!
          <a style={{ marginLeft: "10px" }} href="/" onClick={logoutUser}>
            Logout
          </a>
        </div>
      </div>
      <div id="user-button">
        <UserButton />
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
