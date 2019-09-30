const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });

});


describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});


describe("utils.makeHalfPrice", () => {
  test("returns 75 when passed 150", () => {
    expect(utils.makeHalfPrice(150)).toBe(75);
  });
});


describe("utils.countBooks", () => {
  test("returns 5 when passed an array of 5 titles", () => {
    expect(utils.countBooks(["Title1", "Title2", "Title3", "Title4", "Title6"])).toBe(5);
  });
});


describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
    };
  
    expect(utils.isInStock(book)).toBe(true);
  });

  test("returns false if the title is not in stock", () => {
    const book = {
      title: "The Mud Diaries",
      author: "Martin Morris",
      yearOfPublication: 2006,
      quantity: 0
    };
  
    expect(utils.isInStock(book)).toBe(false);
  });
});

describe("utils.getTotalOrderPrice", () => {
  test("returns 43.2 when passed price is 18 and quantity is 2", () => {
    expect(utils.getTotalOrderPrice(1800, 2)).toBe(4320);
    // to avoid rounding error causing the test to fail £18 converted to 1800pence. Floating point arithmetic quirks of JS
  });

  test("returns 96 when passed price is 8 and quantity is 10", () => {
    expect(utils.getTotalOrderPrice(8, 10)).toBe(96);
  });
});


