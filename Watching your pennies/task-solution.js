const manageMoney = (cash, expenses, rate) => {
  for (let i = 0; i < 12; i++) {
    if (cash < expenses) return `You ran out of money after ${i} months`;
    cash = cash + (cash / 100) * rate - expenses;
  }
  return `You still have $${cash.toFixed(2)}`;
};
