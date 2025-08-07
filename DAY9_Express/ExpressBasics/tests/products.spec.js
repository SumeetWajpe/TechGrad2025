const request = require("supertest");
const express = require("express");
  const productsRouter = require("../routes/products.routes");

describe("Test suite for products controller", () => {

  const app = express();
  app.use("/products", productsRouter);

  it("should return a list of products", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: "OLED", price: 10000 },
      { id: 2, name: "QLED", price: 20000 },
      { id: 3, name: "Curv LED", price: 30000 },
    ]);
  });
});
