function longestCollatz(inputArray) {
  let maxLength = 0,
    num = null;
  for (let i = 0; i < inputArray.length; i++) {
    let seq = 0,
      n = inputArray[i];
    while (n !== 1) {
      if (n % 2) n = 3 * n + 1;
      else n /= 2;
      seq++;
    }
    if (seq > maxLength) {
      maxLength = seq;
      num = inputArray[i];
    }
  }
  return num;
}
