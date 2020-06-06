import React, { useState } from "react";
import { getName, getUsername } from "../utilities/userManager";
import updateUser from "./UpdateUserApi";
import SmallButton from "../shared/SmallButton";
import Cookies from "js-cookie";
import SmallTextEntry from "../shared/SmallTextEntry";
import { Redirect } from "react-router";
import "./userHomepageStyles.css";

export default function UpdateUserForm(showUpdate) {
  const [inputName, setInputName] = useState(getName());
  const [username, setUsername] = useState(getUsername());

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
    <div className={`expand-update ${showUpdate.showUpdate ? "show" : "hide"}`}>
    <div className="update-form">
      <form>
        <p className="update-name">Enter your new nickname</p>
        <div style={{ marginBottom:"3%", marginTop:"3%" }}>
        <SmallTextEntry
          value={inputName}
          onChange={(event) => {
            setInputName(event.target.value);
          }}
          placeholderText={username}
        />
        </div>
        <SmallButton buttonText="update" onClick={onSubmit}></SmallButton>
      </form>
      </div>
    </div>
  );
}
