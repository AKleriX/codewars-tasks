function flip(d, a) {
  let arr = /U|D/.test(d) ? a[0].map((ar, i) => a.map((m) => m[i])) : [...a];
  arr = arr.map((a) => a.sort((c1, c2) => (/D|R/.test(d) ? c1 - c2 : c2 - c1)));
  return /U|D/.test(d) ? arr[0].map((ar, i) => arr.map((m) => m[i])) : arr;
}
