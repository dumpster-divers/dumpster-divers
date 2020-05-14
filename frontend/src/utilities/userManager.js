const registerUser = (name) => {
  sendRegisterRequest(name).then((res, err) => {
    if (!err) {
      console.log(res.username);
    } else {
      console.log("Error getting username");
    }
  });
};

const sendRegisterRequest = async (name) => {
  let body = {
    name: name,
    processedTotal: 0 // TODO: Add this
  };

  const response = await fetch("api/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return response.json();
};

export {registerUser};