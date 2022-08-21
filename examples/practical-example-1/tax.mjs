/**
 * Calculates the tax for a given amount. Tax
 * defaults to 15%.
 * @param {number} amount
 * @param {number} taxPercentage
 */
export function calculateTax(amount, taxPercentage = 15) {
  return amount + amount * (taxPercentage / 100);
}
