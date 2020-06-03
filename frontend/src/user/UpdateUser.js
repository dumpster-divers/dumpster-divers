import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import UpdateUserForm from "./UpdateUserForm";
import "./userHomepageStyles.css";

export default function ShowUpdateOption() {

  const [showUpdate, setShowUpdate] = useState(false);

  return(
    <div>
      <IconButton className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
        <EditIcon />
      </IconButton>
      <UpdateUserForm showUpdate={showUpdate} />
    </div>
  );
}
