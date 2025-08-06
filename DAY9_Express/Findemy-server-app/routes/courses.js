var express = require("express");
var courses = require("../models/courses.model");

var router = express.Router();

/* GET courses listing. */
router.get("/courses", function (req, res, next) {
  try {
    res.json(courses);
  } catch (error) {
    next(error);
  }
});

router.post("/newcourse", function (req, res) {
  const newCourse = req.body; // read the request body (payload)
  courses.push(newCourse); // SQL command to insert the data in DB
  res.send("New Course Added Successfully");
});
router.get("/getcourse/:id", function (req, res) {
  const courseId = req.params.id;
  const course = courses.find(c => c.id === courseId);
  if (course) {
    res.json(course);
  } else {
    res.status(404).send("Course not found");
  }
});

router.delete("/course/:id", function (req, res) {
  const courseId = req.params.id;
  const courseIndex = courses.findIndex(c => c.id == courseId);
  if (courseIndex !== -1) {
    let theDeletedCourse = courses.splice(courseIndex, 1);
    res.json({
      msg: `${theDeletedCourse[0].title} Course Deleted Successfully`,
      deleteStatus: true,
    });
  } else {
    res.status(404).send("Course not found");
  }
});
router.put("/updatecourse", function (req, res) {
  res.send("Course Updated Successfully");
});

module.exports = router;
