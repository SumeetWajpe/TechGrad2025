import axios from "axios";
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    // handle success
    console.log(response.data.length);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
