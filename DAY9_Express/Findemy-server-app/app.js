var express = require("express");
var path = require("path");
var logger = require("morgan");

var coursesRouter = require("./routes/courses");

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/courses", coursesRouter);

module.exports = app;
