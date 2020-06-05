import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";
import { attemptLogin, createUserCookie } from "../utilities/userManager";
import { Redirect } from "react-router-dom";

const LostAccountForm = ({ onError }) => {
  const [value, setValue] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      setLoading(true);
      attemptLogin(value)
        .then(createUserCookie)
        .then(redirectHome)
        .catch(handleError);
    }
  };

  const handleError = () => {
    setLoading(false);
    onError();
  };

  const redirectHome = () => setRedirect(true);
  const useStyles = makeStyles(() =>
    createStyles({
      wow: {
        marginTop: "15px",
      },
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  const classes = useStyles();

  return (
    <>
      <TextEntry
        value={value}
        onChange={onChange}
        placeholderText={"Your linked email"}
        onSubmit={handleSubmit}
      />
      <div className={classes.wow}>
        <ActionButton
          buttonText={"submit"}
          onClick={handleClick}
          loading={loading}
        />
      </div>
      {redirect && <Redirect to="/" />}
    </>
  );
};

export default LostAccountForm;
