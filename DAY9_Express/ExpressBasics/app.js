const express = require("express");
const productsRouter = require("./routes/products.routes");
const mysql = require("mysql");
const app = express();
const port = 3000;

app.use(express.static("static"));
app.use("/products", productsRouter);
// app.use("/users", productsRouter);
// app.use("/employees", productsRouter);

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello World!</h1>");
//   res.sendFile(__dirname + "/Index.html");
// });
// app.get("/styles.css", (req, res) => {
//   res.sendFile(__dirname + "/styles.css");
// });
// app.get("/products", (req, res) => {
//   var products = [
//     { id: 1, name: "OLED", price: 10000 },
//     { id: 2, name: "QLED", price: 20000 },
//     { id: 3, name: "Curv LED", price: 30000 },
//   ];
//   res.json(products);
// });

// MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "n3u3da!",
  database: "your_db_name",
});

connection.connect();

connection.query("SELECT * from trades", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0]);
});

connection.end();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
