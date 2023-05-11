const express = require('express');
const bodyParser = require('body-parser');
const TransactionManager = require('./TransactionManager');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/transactions', (req, res) => {
  const transactions = TransactionManager.getTransactions();
  res.status(200).json(transactions);
});

app.post('/transactions', (req, res) => {
  const transaction = req.body;
  const newTransaction = TransactionManager.addTransaction(transaction);
  res.status(201).json(newTransaction);
});

app.delete('/transactions/:transaction_id', (req, res) => {
  const transactionId = req.params.transaction_id;
  const deletedTransaction = TransactionManager.deleteTransaction(transactionId);
  if (deletedTransaction) {
    res.status(204).send();
  } else {
    res.status(404).send('Transaction not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});