function GetPosts(callback) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
      var posts = JSON.parse(xmlHttpReq.responseText);
      callback(null, posts);
    } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
      callback("Error fetching posts: " + xmlHttpReq.statusText, null);
    }
  };
  xmlHttpReq.send(); // places the async call
  console.log("Ended");
}
