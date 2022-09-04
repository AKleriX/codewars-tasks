function comparePowers(n1, n2) {
  let firstNum = n1[1] * Math.log(n1[0]),
    secondNum = n2[1] * Math.log(n2[0]);
  return firstNum > secondNum ? -1 : firstNum < secondNum ? 1 : 0;
}
