function primeString(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let arr = [];
    for (let j = 0; j < s.length; j += i) arr.push(s.slice(j, j + i));
    if (arr.every((str, _, a) => str === a[0])) return false;
  }
  return true;
}
