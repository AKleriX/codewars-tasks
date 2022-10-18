function switcher(x) {
  const abc = 'zyxwvutsrqponmlkjihgfedcba!? ';
  return x.map((n) => abc[+n - 1]).join('');
}
