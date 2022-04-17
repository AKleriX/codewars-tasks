function happyNumbers(x) {
  let happyNums = [];
  const isHappy = (n) => {
    let sqSums = new Set();
    while (n !== 1 && !sqSums.has(n) && !happyNums.includes(n)) {
      sqSums.add(n);
      n = [...n.toString()].reduce((sum, d) => sum + (+d) ** 2, 0);
    }
    return n === 1 || happyNums.includes(n);
  };
  for (let i = 1; i <= x; i++) if (isHappy(i)) happyNums.push(i);
  return happyNums;
}
