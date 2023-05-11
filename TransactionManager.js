class Transaction {
  constructor(date, description, amount, type) {
    this.date = date;
    this.description = description;
    this.amount = amount;
    this.type = type;
    this.id = Math.floor(Math.random() * 1000);
  }
}

function getTransactions() {
  const transactions = [
    new Transaction('2022-01-01', 'Salary', 4000, 'credit'),
    new Transaction('2022-01-09', 'Rent', -580, 'debit'),
    new Transaction('2022-01-15', 'Grocery/ Shopping', -200, 'debit'),
    new Transaction('2022-01-27', 'Gas bill', -50, 'debit'),
    new Transaction('2022-01-30', 'Investment', 1000, 'credit'),
  ];
  return transactions;
}

module.exports = {
  Transaction,
  getTransactions,
};






