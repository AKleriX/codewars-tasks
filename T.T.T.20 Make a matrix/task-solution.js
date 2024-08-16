function makeMatrix(arr1, arr2) {
  const u = [
      ...arr1.filter((v) => !arr2.includes(v)),
      ...arr2.filter((v) => !arr1.includes(v)),
    ].sort((a, b) => a - b),
    n = Math.floor(Math.sqrt(u.length));
  return [...Array(n)].reduce((a, _, i) => [...a, u.slice(i * n, i * n + n)], []);
}
