require("./models");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(process.env.PWD, 'frontend/build')));
// Middleware
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Trash count related requests
const trashRouter = require("./routes/trashRouter");
app.use("/api/trash", trashRouter);

const highscoreRouter = require('./routes/highscoreRouter');
app.use("/api/highscore", highscoreRouter);

// start app and listen for incoming requests on port
app.listen(process.env.PORT || 3000, () => {
  console.log("App is running on port " + (process.env.PORT || 3000));
});
