import React, { useState } from "react";
import { getUsername, isLoggedIn } from "../utilities/userManager";
import {getUserStats, useUserStats} from "./GetUserStatsApi";

export default function UserStats() {
  const username = getUsername();

  const {userStats} = useUserStats();

  return(
    console.log(userStats.user),
    <p>success</p>
  );
}
