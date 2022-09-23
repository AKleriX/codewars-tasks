function solve(arr) {
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map((w) => [...w].filter((l, i) => i === abc.indexOf(l.toLowerCase())).length);
}
