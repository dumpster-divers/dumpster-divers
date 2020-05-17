import React, { useState } from "react";
import { getName, getUsername, isLoggedIn } from "../utilities/userManager";
import updateUser from "./UpdateUserApi";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";
import TextEntry from "../shared/TextEntry";
import { Redirect } from "react-router";

export default function UpdateUserForm() {
  const [inputName, setInputName] = useState(getName());
  const [username, setUsername] = useState(getUsername());

  if (!isLoggedIn()) {
    return <Redirect to="/" />;
  }

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
    <div>
      <form>
        <p className="update-name">Enter your new nickname</p>
        <TextEntry
          value={inputName}
          onChange={(event) => {
            setInputName(event.target.value);
          }}
          placeholderText={username}
        />
        <Button onClick={onSubmit}>Update</Button>
      </form>
    </div>
  );
}
