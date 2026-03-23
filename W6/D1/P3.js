// using a custom CommonJS module
const { calculateTax, applyDiscount, formatCurrency } = require("./P2");

const itemName = "Laptop";
const basePrice = 60000;

const discountPrice = applyDiscount(basePrice, 10);
const taxAmount = calculateTax(discountPrice);
const finalPrice = discountPrice + taxAmount;

console.log("Item:", itemName);
console.log("Base Price:", formatCurrency(basePrice));
console.log("Discount Price:", formatCurrency(discountPrice));
console.log(" GST @18%: ", formatCurrency(taxAmount));
console.log("Final Price:", formatCurrency(finalPrice));
