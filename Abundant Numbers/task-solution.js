const abundant = (h) => {
  for (let n = h; n >= 12; n--) {
    let sum = 1;
    for (let d = 2; d <= n / 2; d++) if (n % d === 0) sum += d;
    if (sum > n) return [[n], [sum - n]];
  }
};
