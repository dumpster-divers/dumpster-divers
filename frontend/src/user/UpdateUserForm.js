import React, { useState } from "react";
import {getName, getUsername} from "../utilities/userManager";
import updateUser from "./UpdateUserApi";


export default function UpdateUserForm() {

  const [name_input, setName] = useState(getName());
  const username_input = getUsername();

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
        <input type="text" name="name" value={name_input} onChange={event => {
          setName(event.target.value);
        }}/>
        <button type='btn' onClick={onSubmit()}>
          Update
        </button>
      </form>
    </div>
  );
}
