let rules = [
    { role: "admin", action: "READ", allowed: true },
    { role: "student", action: "READ", allowed: true },
    { role: "guest", action: "READ", allowed: false },
    { role: "admin", action: "WRITE", allowed: true },
    { role: "student", action: "WRITE", allowed: false }
  ];
let allowedRules = rules.filter(rule => rule.allowed === true);
let allowedPairs = allowedRules.map(rule => rule.role +":"+ rule.action);
summary = allowedRules.reduce((a,b) =>{a[b]=(a[b] || 0) +1;
    return a;
},{});
console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);