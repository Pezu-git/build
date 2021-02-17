import { mage, charSort } from "../js/app";

test("first test", () => {
  expect(mage([{ name: "мечник", health: 15 }])).toBe("critical");
  expect(mage([{ name: "мечник", health: 0 }])).toBe("critical");
  expect(mage([{ name: "лучник", health: 16 }])).toBe("wounded");
  expect(mage([{ name: "лучник", health: 50 }])).toBe("wounded");
  expect(mage([{ name: "маг", health: 51 }])).toBe("healthy");
  expect(mage([{ name: "маг", health: 100 }])).toBe("healthy");
});

test("second test", () => {
  expect(
    charSort([
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ])
  ).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ]);
  expect(
    charSort([
      { name: "лучник", health: 97 },
      { name: "маг", health: 98 },
      { name: "мечник", health: 99 },
    ])
  ).toEqual([
    { name: "мечник", health: 99 },
    { name: "маг", health: 98 },
    { name: "лучник", health: 97 },
  ]);
});
