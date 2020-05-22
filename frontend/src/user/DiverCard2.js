import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { getName, getUsername } from "../utilities/userManager";
import {getUserStats, useUserStats} from "./GetUserStatsApi";

class DiverCard2 extends React.Components {

  async componentDidMount() {
    const username = getUsername();
    const response = await fetch(`/api/stats/user-highscore?username=${username}`);
    const userStats = await response.json();
    console.log(userStats)
  }

  render(){
    return(<div>
      <div>
        
      </div>
    </div>
  );
  }

}

export default DiverCard2;
