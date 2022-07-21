function hofstadterQ(n) {
  let numsQ = [1, 1];
  for (let i = 2; i < n; i++) numsQ[i] = numsQ[i - numsQ[i - 1]] + numsQ[i - numsQ[i - 2]];
  return numsQ[n - 1];
}
