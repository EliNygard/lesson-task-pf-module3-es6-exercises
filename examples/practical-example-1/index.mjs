import { calculateTax } from "./tax.mjs";
import { formatCurrency } from "./utils.mjs";
import { displayAmount } from "./display.mjs";

// Our item initially costs 20
const price = 100;
const taxPercentage = 10;

// We need to add tax to our item.
const priceWithTax = calculateTax(price, taxPercentage);
// priceWithTax = 115

// We need to now format the item amount
// so it has 2 decimal spaces but also so
// it shows a currency symbol
const formattedPriceWithTax = formatCurrency(priceWithTax, "kr");
// formattedPriceWithTax = '115.00 kr'

// We finally display a message to the user:
displayAmount(formattedPriceWithTax);
// Logs:
// The item costs 115.00 kr.
