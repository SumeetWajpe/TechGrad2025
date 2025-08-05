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
  const courseListUL = document.querySelector(".list-of-courses");
  for (let index = 0; index < courses.length; index++) {
    const newLi = document.createElement("li");
    newLi.innerText = courses[index].title;
    newLi.className = "fw-bold";
    courseListUL.appendChild(newLi);
    // OR
    // var list = document.querySelector(".list-of-courses");
    // list.innerHTML += `<li class="fw-bold">${courses[index].title}</li>`;
  }
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
