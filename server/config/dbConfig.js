const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pavansharma1226:nWw1nPXroFUrSGoy@movie.e8vz7h5.mongodb.net/?retryWrites=true&w=majority&appName=Movie");

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo Db Connection Successful");
});

connection.on("error", (err) => {
  console.log("Mongo Db Connection Failed");
});

module.exports = connection;
