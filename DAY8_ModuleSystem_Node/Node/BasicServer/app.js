import { createServer } from "http";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("Indexx.html", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Something went wrong !");
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
