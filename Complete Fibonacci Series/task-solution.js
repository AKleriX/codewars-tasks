function fibonacci(n) {
    let fibNums = n < 1 ? [] : (n === 1 ? [0] : [0, 1]);
    while (n-- > 2)
      fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
    return fibNums;
  }