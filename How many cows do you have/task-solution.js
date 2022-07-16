function countCows(n) {
  if (parseInt(n) !== n) return null;
  let cows = 1;
  for (let i = 3; i <= n; i++) cows += countCows(n - i);
  return cows;
}
