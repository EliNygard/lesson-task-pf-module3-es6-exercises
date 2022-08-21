/**
 * Formats an amount to be a currency display amount e.g.
 * "500" becomes "500.00 kr"
 * @param {number} amount Currency amount
 * @param {string} currencySymbol The currency symbol
 * @returns
 */
export function formatCurrency(amount, currencySymbol = "kr") {
  const formattedAmount = amount.toFixed(2);
  return `${formattedAmount} ${currencySymbol}`;
}
