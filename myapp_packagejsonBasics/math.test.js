const calculateTotal = require('./math');

// --- Normal Cases ---
test('calculates 10% off $100', () => {
  expect(calculateTotal(100, 10)).toBe(90);
});

test('calculates 50% off $50', () => {
  expect(calculateTotal(50, 50)).toBe(25);
});

test('calculates 0% discount correctly', () => {
  expect(calculateTotal(100, 0)).toBe(100);
});

// --- Edge Cases ---
test('returns null for negative price', () => {
  expect(calculateTotal(-10, 10)).toBe(null);
});

test('returns null for discount over 100%', () => {
  expect(calculateTotal(100, 110)).toBe(null);
});

test('handles 100% discount (free item)', () => {
  expect(calculateTotal(100, 100)).toBe(0);
});