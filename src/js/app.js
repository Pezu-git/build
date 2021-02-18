/* eslint-disable no-restricted-syntax */
export default function Mage(option) {
  for (const item of option) {
    if (item.health <= 15) {
      return 'critical';
    }
    if (item.health <= 50) {
      return 'wounded';
    }
    return 'healthy';
  }
}
