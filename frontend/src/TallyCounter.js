import React, { useState, useEffect } from "react";

const TallyCounter = () => {
  const [count, setCount] = useState(0);
  //Mount
  useEffect(() => {
    updateCount();
  }, []);

  const updateCount = () => {
    fetch("api/game/global-count")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return setCount(res[0].globalRemaining);
      });
  };

  const decrementDBCount = () => {
    fetch("api/game/add-session-stats", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: 0,
        count: 1
      })
    }).then(() => {
      updateCount();
    });
  };

  const handleIncrementClick = () => {
    setCount(count - 1);
    decrementDBCount();
  };

  return (
    <>
      <p>Tally is {count}</p>
      <div className="App-link" onClick={handleIncrementClick}>
        Decrement Tally
      </div>
    </>
  );
};

export default TallyCounter;
