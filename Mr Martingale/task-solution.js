function martingale(bank, outcomes) {
  let stake = 100;
  for (let i = 0; i < outcomes.length; i++) {
    if (outcomes[i]) {
      bank += stake;
      stake = 100;
    } else {
      bank -= stake;
      stake *= 2;
    }
  }
  return bank;
}
