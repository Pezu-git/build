export default function mage(option) {
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
