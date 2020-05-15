import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";
import { attemptLogin, createUserCookie } from "../utilities/userManager";
import { Redirect } from "react-router-dom";

const SignInForm = () => {
  let [value, setValue] = useState("");
  let [redirect, setRedirect] = useState(false);

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      attemptLogin(value)
        .then(createUserCookie)
        .then(() => setRedirect(true))
        .catch(() => {console.log("yowza")})
    }
  };

  const useStyles = makeStyles(() =>
    createStyles({
      wow: {
        marginTop: "15px"
      }
    })
  );

  const handleSubmit = e => {
    e.preventDefault();
    handleClick();
  };

  const classes = useStyles();

  return (
    <>
      <TextEntry
        value={value}
        onChange={onChange}
        placeholderText={"Your Username"}
        onSubmit={handleSubmit}
      />
      <div className={classes.wow}>
        <ActionButton buttonText={"Sign In"} onClick={handleClick} />
      </div>
      {redirect && <Redirect to="/" />}
    </>
  );
};

export default SignInForm;
