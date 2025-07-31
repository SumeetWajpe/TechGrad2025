const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var products = [
    { id: 1, name: "OLED", price: 10000 },
    { id: 2, name: "QLED", price: 20000 },
    { id: 3, name: "Curv LED", price: 30000 },
  ];
  res.json(products);
});

module.exports = router;
