const express = require("express");
const app = express();
const path = require("path");
const mainRoute = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydata", {
  //    useNewParser : true,
  useUnifiedtopoLogy: true,
});
var db = mongoose.connection;
db.on("error", () => {
  console.log("Error in connecting to database.");
});
db.once("open", () => {
  console.log("Database Connected");
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static("views"));
app.use(express.static("scripts"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(mainRoute);
app.use(errorHandler);

app.set("view engine", "ejs");
console.log(app.get("views"));
app.listen(port, () => {
  console.log(`server run http://localhost:${port}`);
});
