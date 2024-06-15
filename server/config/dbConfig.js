const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pavansharma1226:TnBcuX2CBhh8jZn@cluster0.mzsqod3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

connection.on("error", (err) => {
  console.log("Mongo Db Connection Failed");
});

module.exports = connection;
