function oneTwoThree(n) {
  let firstNum = n === 0 ? '0' : '9'.repeat(n / 9) + (n % 9 ? (n % 9).toString() : ''),
    secondNum = n > 0 ? '1'.repeat(n) : '0';
  return [firstNum, secondNum];
}
