require('dotenv').config()

const mongoose = require("mongoose");

// Connect to MongoDB
const DB_LOCATION = process.env.DB_LOCATION;
if (DB_LOCATION == "prod") {
  CONNECTION_STRING = "mongodb+srv://dumpsterteam:<password>@dumpster-byflt.mongodb.net/test?retryWrites=true&w=majority";
  MONGO_URL = CONNECTION_STRING.replace("<password>", process.env.MONGO_PASSWORD);
  console.log("Running on production db")
} else {
  MONGO_URL =  "mongodb://localhost/dumpsterdiverlocal"
  if (DB_LOCATION != "local") {
    console.warn("WARNING: DB_LOCATION Environment variable not set. Defaulting to local db. Set DB_LOCATION to either \"prod\" or \"local\"")
  } else {
    console.log("Running on local db")
  }
}

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: "dumpsterdiversdb"
});

const db = mongoose.connection;
db.on("error", err => {
  console.error(err);
  process.exit(1);
});

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./Stats");
require("./Users");
