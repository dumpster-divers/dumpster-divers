import React from "react";
import { isMobile } from "../utilities/display";

const UserButton = function () {
  let [width, height] = isMobile() ? [60, 60] : [89, 87];
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 89 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <a id="user-buttonA" href="/UserHomepage">
        <path
          id="path1"
          d="M88.5 0C92 52.5 66 91.5 2.21762e-05 85.5V21C0 8.5 8 0 21 0H88.5Z"
          fill="#FF7676"
        />
        <path
          id="path2"
          d="M39.5 40.5C32 40.5 24.6667 47.3333 21 52C24 56.5 31 61 39.5 61C48 61 55.5 56.5 59 51C55 46.6667 47 40.5 39.5 40.5Z"
          fill="#EBEBEB"
        />
        <circle cx="39.5" cy="28" r="10" fill="#EBEBEB" />
      </a>
    </svg>
  );
};

export default UserButton;
