function off(n) {
  let switcher = Array.from({ length: n }, (_, i) => [i + 1, false]);
  for (let i = 1; i <= n; i++) for (let j = i; j < n; j += i + 1) switcher[j][1] = !switcher[j][1];
  return switcher.filter((a) => !a[1]).map((a) => a[0]);
}
