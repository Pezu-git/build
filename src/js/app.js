export function mage(option) {
  for (let item of option) {
    if (item.health <= 15) {
      return "critical";
    } else if (item.health <= 50) {
      return "wounded";
    } else {
      return "healthy";
    }
  }
}

export function charSort(option) {
  let charsItem = Object.keys(option);
  charsItem = charsItem.sort((a, b) => option[b].health - option[a].health);
  let sortOption = [];
  for (let item in charsItem) {
    sortOption.push(option[charsItem[item]]);
  }
  return sortOption;
}

// charSort([
//   { name: "мечник", health: 10 },
//   { name: "маг", health: 100 },
//   { name: "лучник", health: 80 },
// ]);
