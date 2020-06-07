import React, { useState } from "react";
import { getName, getUsername } from "../utilities/userManager";
import updateUser from "./UpdateUserApi";
import Cookies from "js-cookie";
import SmallTextEntry from "../shared/SmallTextEntry";
import "./userHomepageStyles.css";
import { makeStyles } from "@material-ui/core/styles";
import ActionButton from "../shared/ActionButton";
import { isMobile } from "../utilities/display";

export default function UpdateUserForm(showUpdate) {
  const [inputName, setInputName] = useState(getName());
  const [username, setUsername] = useState(getUsername());

  //define modal style
  const useStyles = makeStyles((theme) => ({
    expandUpdateShow: {
      position: "absolute",
      width: "190px",
      height: isMobile() ? "300px" : "550px",
      top: "100%",
      right: "0%",
      [theme.breakpoints.up("sm")]: {
        width: "472px",
      },
    },
    expandUpdateHide: {
      display: "none",
      padding: "10px",
    },
  }));

  const classes = useStyles();

  function onSubmit() {
    // call update user function
    updateUser({
      username: username,
      name: inputName,
    })
      .then((res) => res.json())
      .then((res) => {
        Cookies.set("name", res.name);
        setUsername(res.name);
      })
      .then((res) => window.location.reload());
  }

  return (
    <div
      className={
        showUpdate.showUpdate
          ? classes.expandUpdateShow
          : classes.expandUpdateHide
      }
    >
      <div className="update-form">
        <p className="update-name">Enter your new nickname</p>
        <div style={{ marginBottom: "3%", marginTop: "3%" }}>
          <SmallTextEntry
            value={inputName}
            onChange={(event) => {
              setInputName(event.target.value);
            }}
            placeholderText={username}
          />
        </div>
        <ActionButton buttonText="update" onClick={onSubmit} />
      </div>
    </div>
  );
}
