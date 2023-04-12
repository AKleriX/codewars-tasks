function hiddenWord(num) {
  const dict = ['o', 'b', 'l', 'i', 'e', 't', 'a', 'd', 'n', 'm'];
  return [...num.toString()].map((d) => dict[d]).join('');
}
