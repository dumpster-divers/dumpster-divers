import React, { useState } from "react";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { createUserCookie, registerUser } from "../utilities/userManager";
import { Redirect } from "react-router-dom";

const SignUpForm = () => {
  const [value, setValue] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const MAX_NAME_LENGTH = 20;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      setLoading(true);
      registerUser(value)
        .then(createUserCookie)
        .then(() => setRedirect(true));
    }
  };

  const handleSubmit = (e) => {
    //Prevent page refresh
    e.preventDefault();
    //Do the same thing as submit button
    handleClick();
  };

  const useStyles = makeStyles(() =>
    createStyles({
      wow: {
        marginTop: "15px",
      },
    })
  );

  const classes = useStyles();

  return (
    <>
      <TextEntry
        value={value}
        onChange={onChange}
        onSubmit={handleSubmit}
        placeholderText={"Your First Name"}
        maxLength={MAX_NAME_LENGTH}
      />
      <div className={classes.wow}>
        <ActionButton
          buttonText={"Sign Up!"}
          onClick={handleClick}
          loading={loading}
        />
      </div>
      {redirect && <Redirect to="/postsignup" />}
    </>
  );
};

export default SignUpForm;
