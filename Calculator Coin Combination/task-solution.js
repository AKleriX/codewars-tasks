function coinCombo (cents) {  
    let lastCents = cents,
        resCoins = [1, 5, 10, 25];
    for (let i = 3; i >= 0; i--)
      [resCoins[i], lastCents] = [Math.trunc(lastCents / resCoins[i]), lastCents % resCoins[i]];
    return resCoins;
  }