import React from "react";
import { postGameStoreScore } from "../utilities/userManager";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const PostGameLoginLogoutFlow = ({ score, history }) => {
  const handleLogin = () => {
    postGameStoreScore(score);
    history.push("/signin");
  };

  const handleSignUp = () => {
    postGameStoreScore(score);
    history.push("/signup");
  };

  const useStyle = makeStyles(() =>
    createStyles({
      link: {
        textDecoration: "underline",
        fontWeight: "bold",
        padding: "0px 4px",
        cursor: "pointer"
      }
    })
  );

  const classes = useStyle();

  return (
    <>
      Want to make an account?
      <span onClick={handleLogin} className={classes.link}>
        {" "}
        Login
      </span>
      <span onClick={handleSignUp} className={classes.link}>
        Sign Up
      </span>
    </>
  );
};

export default withRouter(PostGameLoginLogoutFlow);
