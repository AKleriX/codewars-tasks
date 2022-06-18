function buyTofu(cost, box) {
  let coins = box.split(' ').reduce(
      (c, item) => {
        if (item === 'mon') c[0]++;
        else if (item === 'monme') c[1]++;
        return c;
      },
      [0, 0],
    ),
    res = [...coins, coins[0] * 1 + coins[1] * 60],
    counter = 0;
  while (cost > 0) {
    if (cost >= 60 && coins[1]) {
      counter++;
      cost -= 60;
      coins[1]--;
    } else if (coins[0]) {
      counter++;
      cost--;
      coins[0]--;
    } else break;
  }
  return cost ? 'leaving the market' : [...res, counter];
}
