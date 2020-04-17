require('dotenv').config()

const mongoose = require("mongoose");

// Connect to MongoDB
CONNECTION_STRING = "mongodb+srv://dumpsterteam:<password>@dumpster-byflt.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>", process.env.MONGO_PASSWORD);

console.log(MONGO_URL);

mongoose.connect(MONGO_URL || "mongodb://localhost/dumpsterdiverlocal", {
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

require("./trash");
