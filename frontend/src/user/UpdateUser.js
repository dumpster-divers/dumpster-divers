import React, { useState } from "react";
import Button from "./Button";

export default function UpdateUserForm(props) {
  const { name, username } = props;

  const [name_input, setName] = useState(name);
  const [username_input, setUsername] = useState(username)

  function onSubmit() {
    // call upate user function
    updateUser({
      username: username_input,
      name: name_input
    });
  }

  return (
    <div>
      <form>
      <input type="text" name="username" value={username_input} onChange={event => {
        setUsername(event.target.value);
      }}/>
        <input type="text" name="name" value={name_input} onChange={event => {
          setName(event.target.value);
        }}/>
        <button type='btn' className={"btn-warning"} onClick={onSubmit()}>
          Update
        </button>
      </form>
    </div>
  );
}


function updateUser(user) {
  const { username, name } = user;
  if (!username) {
    alert("must enter something");
    return;
  }

  const endpoint = 'https://dumpster-divers.herokuapp.com/api/users/update';

  // return fetch query to update an user
  return fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      username,
      name
    })
  })
  .then(res => window.location.reload());
}
