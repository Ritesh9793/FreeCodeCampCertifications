class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // Deposit money
  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push({
      type: "deposit",
      amount: amount
    });

    this.balance += amount;

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  // Withdraw money
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({
      type: "withdraw",
      amount: amount
    });

    this.balance -= amount;

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  // Check balance
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter(transaction => transaction.type === "deposit")
      .map(transaction => transaction.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  // List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(transaction => transaction.type === "withdraw")
      .map(transaction => transaction.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Create account instance
const myAccount = new BankAccount();

// At least five transactions
console.log(myAccount.deposit(200));
console.log(myAccount.deposit(150));
console.log(myAccount.withdraw(50));
console.log(myAccount.deposit(100));
console.log(myAccount.withdraw(75));

// Additional test cases
console.log(myAccount.deposit(-50));
console.log(myAccount.deposit(0));

console.log(myAccount.withdraw(1000));
console.log(myAccount.withdraw(-20));
console.log(myAccount.withdraw(0));

// Display account details
console.log(myAccount.checkBalance());

console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());

/*
Example Output:

Successfully deposited $200. New balance: $200
Successfully deposited $150. New balance: $350
Successfully withdrew $50. New balance: $300
Successfully deposited $100. New balance: $400
Successfully withdrew $75. New balance: $325

Current balance: $325

Deposits: 200,150,100
Withdrawals: 50,75
*/
