function zeros (n) {
    let zeroCounter = 0;
    for (let i = 5; Math.trunc(n / i) >= 1; i *= 5)
      zeroCounter += Math.trunc(n / i);
    return zeroCounter;
  }