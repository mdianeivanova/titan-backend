const express = require('express');
const { Transaction, getTransactions } = require('../TransactionManager');
const router = express.Router();
router.get('/', (req, res) => {
  const transactions = getTransactions();
  res.json(transactions);
});

router.post('/', (req, res) => {
  const { date, description, category, amount } = req.body;

  if (!date || !description || !category || !amount) {
    res.status(400).send('Bad request: missing required fields');
    return;
  }

  const newTransaction = new Transaction(date, description, category, amount);
  res.json(newTransaction);
});

router.delete('/:transaction_id', (req, res) => {
  const transactionId = req.params.transaction_id;
  res.sendStatus(204);
});

module.exports = router;
