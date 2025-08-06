// called when DOM is ready
// This script fetches courses from the server when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", async function () {
  try {
    // fetch courses
    var courses = await FetchCourses("http://localhost:3000/courses");
    // display courses in the UI
    displayCourses(courses);
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
      toastr.success("Delete Course", response.data.msg);
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
