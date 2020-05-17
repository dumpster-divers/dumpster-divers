import React, { useState }    from "react";
import {getName, getUsername} from "../utilities/userManager";
import updateUser             from "./UpdateUserApi";
import Button                 from "@material-ui/core/Button";
import Cookies                from "js-cookie";


export default function UpdateUserForm() {

  const [name_input, setName] = useState(getName());
  const [username, setUsername] = useState(getUsername());

  function onSubmit() {
    // call update user function
    updateUser({
      username: username,
      name: name_input
    }).then(res => res.json())
      .then((res) => {
      Cookies.set("name", res.name);
      setUsername(res.name);
    });
  }

  return (
    <div>
      <form>
        <input type="text" name="name" value={name_input} onChange={event => {
          setName(event.target.value);
        }}/>
        <Button onClick={onSubmit}>
          Update
        </Button>
      </form>
    </div>
  );
}
