const transactions = [
  { type: 'deposit', amount: 100 },
  { type: 'withdraw', amount: 50 },
  { type: 'deposit', amount: 200 },
  { type: 'withdraw', amount: 100 },
  { type: 'withdraw', amount: 50 },
];

const calc = transactions => {
  return transactions.reduce(
    (acc, transaction) => {
      return {
        ...acc,
        [transaction.type]: transaction.amount + acc[transaction.type],
      };
    },
    { deposit: 0, withdraw: 0 },
  );
};

const { deposit: income, withdraw: expenses } = calc(transactions);

console.log(income, expenses);
