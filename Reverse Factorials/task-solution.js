function reverseFactorial(num) {
  let res = 1,
    counter = 1;
  while (res <= num) {
    if (res === num) return counter + '!';
    res *= ++counter;
  }
  return 'None';
}
