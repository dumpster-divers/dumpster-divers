require('dotenv').config()

const mongoose = require("mongoose");

// Connect to MongoDB
if (process.argv[1] == "prod") {
  CONNECTION_STRING = "mongodb+srv://dumpsterteam:<password>@dumpster-byflt.mongodb.net/test?retryWrites=true&w=majority";
  MONGO_URL = CONNECTION_STRING.replace("<password>", process.env.MONGO_PASSWORD);
} else if (process.argv[1] == "local") {
  MONGO_URL =  "mongodb://localhost/dumpsterdiverlocal"
} else {
  console.err("Argument provided is incorrect");
  console.err(process.argv[1]);
  process.exit(1);
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

require("./tally");
