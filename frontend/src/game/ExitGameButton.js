import React from "react";
import { isMobile } from "../utilities/display";

const ExitGameButton = function () {
  let [width, height] = isMobile() ? [60, 60] : [89, 87];
  return (
    <svg
      id="GoBackButton"
      width={width}
      height={height}
      viewBox="0 0 89 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <a id="GoBackButtonA" href="/">
        <path
          d="M88.5 0C92 52.5 66 91.5 2.21762e-05 85.5V21C0 8.5 8 0 21 0H88.5Z"
          fill="#FF7676"
        />
        <rect
          x="23.3643"
          y="17"
          width="53"
          height="9"
          rx="4.5"
          transform="rotate(45 23.3643 17)"
          fill="#FFDDDD"
        />
        <rect
          x="17"
          y="54.4766"
          width="53"
          height="9"
          rx="4.5"
          transform="rotate(-45 17 54.4766)"
          fill="#FFDDDD"
        />
      </a>
    </svg>
  );
};

export default ExitGameButton;
