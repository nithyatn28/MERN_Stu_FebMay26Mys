let wallet = {
  owner: "Nithya",
  balance: 400,
  lastTransaction: null,
   deposit:function(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("deposite");
    }else{
    this.balance =this.balance + amount;
    this.lastTransaction = {
      type: "DEPOSIT",
      amount: amount,
      balanceAfter: this.balance
    };
    }
  },
   withdraw:function(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.log("enter valid amount");
    }

    if (amount > this.balance) {
      console.log("entered amount is more than balance");
    }else{
    this.balance = this.balance+amount;

    this.lastTransaction = {
      type: "WITHDRAW",
      amount: amount,
      balanceAfter: this.balance
    };
    }
  }
};


wallet.withdraw(100);
console.log(wallet);