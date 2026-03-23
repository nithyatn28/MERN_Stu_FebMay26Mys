//importnES moduls 

import createInvoiceLabel,{calculateTotal,taxrate}from "./P5.mjs";
const subtotal=4000;
const total = calculateTotal(subtotal);
const label =createInvoiceLabel("INV-2026-001");

console.log("InvoiceLable:",label);
console.log("total:",total);
console.log("taxrate",taxrate);