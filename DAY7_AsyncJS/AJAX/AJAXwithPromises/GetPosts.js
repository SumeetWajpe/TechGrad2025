function GetPosts() {
  return new Promise(function (resolve, reject) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/postsss");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
        resolve(JSON.parse(xmlHttpReq.responseText));
      } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
        reject("Error fetching posts: " + xmlHttpReq.status);
      }
    };
    xmlHttpReq.send(); // places the async call
  });
}
