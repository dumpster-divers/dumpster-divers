import React from "react";
import { Link } from "react-router-dom";

var GoBackButton = function(){
  return(
    <svg id="GoBackButton" width="89" height="87" viewBox="0 0 89 87" fill="none" xmlns="http://www.w3.org/2000/svg">
      <a id="GoBackButtonA">
        <path d="M88.5 0C92 52.5 66 91.5 2.21762e-05 85.5V21C0 8.5 8 0 21 0H88.5Z" fill="#FF7676"/>
        <rect x="15" y="32.866" width="53" height="9" rx="4.5" fill="#FFDDDD"/>
        <rect x="21.2461" y="32.9415" width="30.0397" height="8.83333" rx="4.41667" transform="rotate(45 21.2461 32.9415)" fill="#FFDDDD"/>
        <rect x="15" y="35.533" width="30.4522" height="8.83333" rx="4.41667" transform="rotate(-45 15 35.533)" fill="#FFDDDD"/>
      </a>
    </svg>

  );
}


export default GoBackButton;
