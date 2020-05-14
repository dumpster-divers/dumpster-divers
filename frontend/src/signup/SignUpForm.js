import React, { useState } from "react";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { createUserCookie, registerUser } from "../utilities/userManager";
import {Redirect} from "react-router-dom";

const SignUpForm = () => {
  let [value, setValue] = useState("");
  let [redirect, setRedirect] = useState(false);

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      registerUser(value)
        .then(createUserCookie)
        .then(() => setRedirect(true));
    }
  };

  const useStyles = makeStyles(() =>
    createStyles({
      wow: {
        marginTop: "15px"
      }
    })
  );

  const classes = useStyles();

  return (
    <>
      <TextEntry
        value={value}
        onChange={onChange}
        placeholderText={"Your Name"}
      />
      <div className={classes.wow}>
        <ActionButton buttonText={"Sign Up!"} onClick={handleClick} />
      </div>
      {redirect && <Redirect to="/postsignup"/> }
    </>
  );
};

export default SignUpForm;
