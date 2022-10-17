function jumpingNumber(n) {
  let strNum = n.toString();
  for (let i = 0; i < strNum.length - 1; i++)
    if (Math.abs(+strNum[i] - +strNum[i + 1]) !== 1) return 'Not!!';
  return 'Jumping!!';
}
