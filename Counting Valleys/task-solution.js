function countingValleys(s) {
  let level = 0,
    valleys = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'U':
        level++;
        break;
      case 'D':
        level--;
        break;
      default:
        break;
    }
    if (level === 0 && s[i] === 'U') valleys++;
  }
  return valleys;
}
