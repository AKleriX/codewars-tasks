function sumin(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) for (let y = 1; y <= n; y++) sum += Math.min(x, y);
  return sum;
}
function sumax(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) for (let y = 1; y <= n; y++) sum += Math.max(x, y);
  return sum;
}
function sumsum(n) {
  let sum = 0;
  for (let x = 1; x <= n; x++) for (let y = 1; y <= n; y++) sum += x + y;
  return sum;
}
