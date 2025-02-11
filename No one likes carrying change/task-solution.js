const coinsNeeded = (amount, coinDenominations) => {
  const coins = [...coinDenominations].sort((a, b) => b - a);
  let count = 0;
  for (let coin of coins) {
    if (amount === 0) break;
    let use = Math.floor(amount / coin);
    count += use;
    amount -= use * coin;
  }
  return count;
};
