var express = require("express");
var path = require("path");
var logger = require("morgan");

var coursesRouter = require("./routes/courses");

var app = express();
app.use(express.json()); // reads values form request object & populates req.body

app.use(express.static(path.join(__dirname, "public")));

app.use("/", coursesRouter);

app.listen(() => {
  console.log("Server is running on port 3000");
});

module.exports = app;
