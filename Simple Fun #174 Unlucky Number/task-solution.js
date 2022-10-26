function unluckyNumber(n) {
  let counter = 1;
  for (let i = 13; i <= n; i += 13) {
    let num = i,
      isUnlucky = true;
    while (num) {
      if (num % 10 === 4 || num % 10 === 7) {
        isUnlucky = false;
        break;
      }
      num = (num / 10) | 0;
    }
    if (isUnlucky) counter++;
  }
  return counter;
}
