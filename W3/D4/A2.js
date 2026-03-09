employee = [
    {name: "Abhi", basePay: 300, bonus: 2000, taxRate: 10 },
    {name: "Ani", basePay: 25000, bonus: 1000, taxRate: 0.2 }
];
let validRecords= employee.filter((emp => emp.basePay>0 && emp.taxRate>=0 && emp.taxRate<=1));
let netPayReport = validRecords.map(m => {
  let gross = emp.basePay + emp.bonus;
  return netPay = gross - (gross * m.taxRate);
 });
 const totalNetPayout = netPayReport.reduce((np, emp) => total + emp,0);
console.log(validRecords);
 console.log(netPayReport);
 console.log(totalNetPayout);
