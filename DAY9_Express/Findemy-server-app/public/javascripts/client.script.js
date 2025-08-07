// called when DOM is ready
// This script fetches courses from the server when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", async function () {
  try {
    if (this.window.location.pathname === "/") {
      // Fetch courses from the server
      const courses = await FetchCourses("http://localhost:3000/courses");
      // Display courses in the UI
      displayCourses(courses);
    }
  } catch (error) {
    console.log(error);
  }
});
// function to display courses in the UI
function displayCourses(courses) {
  //   const courseList = document.querySelector(".list-of-courses");
  //   for (let index = 0; index < courses.length; index++) {
  //     const newLi = document.createElement("li");
  //     newLi.innerText = courses[index].title;
  //     newLi.className = "fw-bold";
  //     courseList.appendChild(newLi);
  //     // OR
  //     // var list = document.querySelector(".list-of-courses");
  //     // list.innerHTML += `<li class="fw-bold">${courses[index].title}</li>`;
  //   }
  // Use div with Grid for UI
  var courseListContainer = document.querySelector(".list-of-courses");
  // create a row
  const courseList = document.createElement("div");
  courseList.className = "row";

  // add new courseItem for each course
  // iterate over the courses array and create a new div for each course
  for (const course of courses) {
    const newCourseItem = document.createElement("div");
    newCourseItem.className = "col-md-3 mb-3"; // Bootstrap classes for responsive layout
    newCourseItem.id = `course-${course.id}`; // set an id for the course item
    const courseCard = createCourseCard(course);
    newCourseItem.appendChild(courseCard); // add the course card to the newCourseItem
    courseList.appendChild(newCourseItem); // add a new Course item to courseList
  }
  courseListContainer.appendChild(courseList);
}

function createCourseCard(course) {
  // create a new div for the course card
  const courseCard = document.createElement("div");
  courseCard.className = "card";
  // Create the Card Image
  const cardImage = document.createElement("img");
  cardImage.src = course.imageUrl;
  cardImage.className = "card-img-top";
  cardImage.alt = course.title;
  cardImage.style.height = "200px"; // set a fixed height for the image
  courseCard.appendChild(cardImage);

  // Create the Card Body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  // Create the Card Title
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = course.title;

  // Create the Card Text
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = "₹." + course.price;
  // Create Likes Button
  const likesButton = document.createElement("button");
  likesButton.className = "btn btn-primary";
  likesButton.innerHTML = `Likes ${course.likes} <i class="fa-solid fa-thumbs-up"></i>`;

  // Create Rating
  const rating = document.createElement("p");
  rating.style.color = "orange";
  for (let index = 0; index < course.rating; index++) {
    const star = document.createElement("i");
    star.className = "fa-solid fa-star";
    rating.appendChild(star);
  }

  // Create Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger mx-2";
  deleteButton.innerHTML = `Delete <i class="fa-solid fa-trash"></i> `;
  //   deleteButton.onclick = function () {};
  deleteButton.addEventListener("click", () => DeleteCourseHandler(course.id));

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(rating); // adding rating to the card body
  cardBody.appendChild(cardText);
  cardBody.appendChild(likesButton); // adding likes button to the card body

  cardBody.appendChild(deleteButton); // adding delete button to the card body

  courseCard.appendChild(cardBody); // adding card body to the course card
  return courseCard;
}
// uses axios to make HTTP requests and fetch courses from the server
async function FetchCourses(url) {
  try {
    var response = await axios.get(url);
    var courses = response.data;
    return courses;
  } catch (error) {
    console.log(error);
  }
}

function DeleteCourseHandler(courseId) {
  // make async call  to API (delete)
  console.log(courseId);
  axios
    .delete(`http://localhost:3000/course/${courseId}`)
    .then(response => {
      // alert(response.data.msg); // show success message
      // console.log(response.data);
      toastr.success("Delete Course", response.data.msg, {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      });
      // remove the course from the UI
      const courseCard = document.getElementById(`course-${courseId}`);
      if (courseCard) {
        courseCard.remove();
      }
    })
    .catch(error => {
      console.error("Error deleting course:", error);
    });
}

function addCourse() {
  // get data from the form
  const courseId = document.getElementById("course-id").value;
  const courseTitle = document.getElementById("course-title").value;
  const courseImage = document.getElementById("course-image").value;
  const coursePrice = document.getElementById("course-price").value;
  const courseDescription = document.getElementById("course-description").value;
  const courseLikes = document.getElementById("course-likes").value;
  // create a new course object
  const newCourse = {
    id: courseId,
    title: courseTitle,
    imageUrl: courseImage,
    price: coursePrice,
    description: courseDescription,
    likes: courseLikes,
    rating: 5,
  };
  // ajax

  axios
    .post("http://localhost:3000/newcourse", newCourse)
    .then(response => {
      // show success message
      toastr.success("Add Course", response.data, {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      });
      // clear the form
      document.getElementById("add-course-form").reset();
    })
    .catch(error => {
      console.error("Error adding course:", error);
      toastr.error("Add Course", "Failed to add course. Please try again.", {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-center",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
      });
    });
  // end of addCourse function
}
