function giveChange(amount) {
  return [100, 50, 20, 10, 5, 1]
    .map((n) => {
      const b = Math.floor(amount / n);
      amount %= n;
      return b;
    })
    .reverse();
}
