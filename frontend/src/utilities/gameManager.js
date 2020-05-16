const fetchTrash = async () => {
  return await fetch("api/game/data")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export {
  fetchTrash
}