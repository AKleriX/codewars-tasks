function multi(arr) {
  return arr.reduce((m, n) => m * n, 1);
}
function add(arr) {
  return arr.reduce((s, n) => s + n, 0);
}
function reverse(str) {
  return [...str].reverse().join('');
}
