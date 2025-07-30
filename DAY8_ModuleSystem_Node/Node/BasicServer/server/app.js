import { createServer } from "http";
import fs from "fs";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./client/Index.html", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Something went wrong !");
        return;
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else if (req.url === "/styles.css") {
    fs.readFile("./client/styles.css", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Something went wrong !");
        return;
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(data);
      }
    });
  } else if (req.url === "/script.js" && req.method === "GET") {
    fs.readFile("./client/script.js", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Something went wrong !");
        return;
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.end(data);
      }
    });
  } else if (req.url === "/products") {
    // should come from DB
    var products = [
      { id: 1, name: "OLED", price: 10000 },
      { id: 2, name: "QLED", price: 20000 },
      { id: 3, name: "Curv LED", price: 30000 },
    ];

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(products));
  } else if (req.url === "/newproduct" && req.method == "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ message: "New product added successfully!" }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
