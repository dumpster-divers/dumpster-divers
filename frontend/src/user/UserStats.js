import React, { useState } from "react";
import { getUsername, isLoggedIn } from "../utilities/userManager";
import {getUserStats} from "./GetUserStatsApi";

export default function UserStats() {
  const username = getUsername();

  return(
    <p>success</p>
  );
}
