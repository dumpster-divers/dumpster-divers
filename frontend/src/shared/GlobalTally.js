import React, { useEffect, useState } from "react";
import ScoreCounter from "../game/ScoreCounter";

const GlobalTally = () => {
  const [tally, setTally] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/game/global-count");
      const json = await res.json();
      setTally(json[0].globalRemaining);
    };
    fetchData().then(null);
  }, []);

  return <ScoreCounter score={tally}/>
};
export default GlobalTally;
