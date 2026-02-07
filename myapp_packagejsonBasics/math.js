function calculateTotal(price, discount) {
  if (price < 0 || discount < 0 || discount > 100) return null;
  return price - (price * (discount / 100));
}
module.exports = calculateTotal;