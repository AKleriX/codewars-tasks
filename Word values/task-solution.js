function wordValue(a) {
  const abc = ' abcdefghijklmnopqrstuvwxyz';
  return a.map((str, i) => [...str].reduce((s, l) => s + abc.indexOf(l), 0) * (i + 1));
}
