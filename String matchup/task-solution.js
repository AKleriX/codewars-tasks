function solve(a, b) {
  let counter = [];
  for (let i = 0; i < b.length; i++) counter.push(a.filter((s) => s === b[i]).length);
  return counter;
}
