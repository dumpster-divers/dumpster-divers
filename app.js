require("./models");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(process.cwd(), 'frontend/build')));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Trash count related requests
const gameRouter = require("./routes/gameRouter");
app.use("/api/game", gameRouter);

const statsRouter = require('./routes/statsRouter');
app.use("/api/stats", statsRouter);

const userRouter = require("./routes/userRouter");
app.use("/api/users", userRouter);

//Finally if nothing resolves send index.html
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(process.cwd(), 'frontend/build')});
});

// start app and listen for incoming requests on port
app.listen(process.env.PORT || 5000, () => {
  console.log("App is running on port " + (process.env.PORT || 5000));
});
