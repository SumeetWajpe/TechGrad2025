var express = require("express");
const courses = require("../models/courses.model");
var router = express.Router();

/* GET courses listing. */
router.get("/", function (req, res, next) {
  res.json(courses);
});

router.post("/newcourse", function (req, res, next) {
  res.send("New Course Added Successfully");
});
router.get("/getcoursewithid", function (req, res, next) {
  res.send("Return course with an id");
});

router.delete("/deletecourse", function (req, res, next) {
  res.send("Course Deleted Successfully");
});
router.put("/updatecourse", function (req, res, next) {
  res.send("Course Updated Successfully");
});

module.exports = router;
