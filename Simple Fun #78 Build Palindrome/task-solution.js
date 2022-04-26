function buildPalindrome(str) {
  let pal = str;
  for (let i = 0; i < str.length; i++) {
    pal = str + [...str.slice(0, i)].reverse().join('');
    if (pal === [...pal].reverse().join('')) break;
  }
  return pal;
}
