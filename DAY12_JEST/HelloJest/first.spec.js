const Add = require("./math").Add;

describe("Test Suite for variable testing", () => {
  it("should test variable assignment", () => {
    let x; // Arrange
    x = 5; // Act
    expect(x).toBe(5); // Assert
  });
  it("should test  addition of two numbers", () => {
    let a = 3; // Arrange
    let b = 4; // Arrange
    let result = Add(a, b); // Act
    expect(result).not.toBe(10); // Assert
  });
  it("should test addition with strings ", () => {
    var hello = "Hello"; // Arrange
    var world = "World"; // Arrange
    var result = Add(hello, world); // Act
    expect(result).toBe("HelloWorld"); // Assert
  });
});
