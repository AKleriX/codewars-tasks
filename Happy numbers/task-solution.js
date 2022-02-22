function isHappy(n) {
  let nums = new Set();
  while (n !== 1 && !nums.has(n)){
    nums.add(n);
    n = [...n.toString()].reduce((sum, num) => sum + Number(num) ** 2, 0);
  }
  return n === 1;
}