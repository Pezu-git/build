/* eslint-disable no-undef */
import mage from '../js/app.js';

test('first test', () => {
  expect(mage([{ name: 'мечник', health: 15 }])).toBe('critical');
  expect(mage([{ name: 'мечник', health: 0 }])).toBe('critical');
  expect(mage([{ name: 'лучник', health: 16 }])).toBe('wounded');
  expect(mage([{ name: 'лучник', health: 50 }])).toBe('wounded');
  expect(mage([{ name: 'маг', health: 51 }])).toBe('healthy');
  expect(mage([{ name: 'маг', health: 100 }])).toBe('healthy');
});
