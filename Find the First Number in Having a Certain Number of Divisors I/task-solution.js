function findMinNum(num) {
  let n = 0,
    memo = {},
    divCount = 0;
  while (divCount !== num) {
    divCount = getDivsNum(++n);
    memo[divCount] = memo[divCount] || n;
  }
  return n;
}

const getDivsNum = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) if (!(n % i)) count++;
  return count;
};
