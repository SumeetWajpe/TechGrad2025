const express = require("express");
const productsRouter = require("./routes/products.routes");
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
