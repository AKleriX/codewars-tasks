const oneCharDifference = (s1, s2) => {
  if (Math.abs(s1.length - s2.length) > 1) return false;
  if (s1.length === s2.length) {
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) diff++;
      if (diff > 1) return false;
    }
    return diff === 1;
  } else {
    let longer = s1.length > s2.length ? s1 : s2,
      shorter = s1.length > s2.length ? s2 : s1,
      i = 0,
      j = 0,
      diff = 0;
    while (i < longer.length && j < shorter.length) {
      if (longer[i] !== shorter[j]) {
        diff++;
        i++;
      } else {
        i++;
        j++;
      }
      if (diff > 1) return false;
    }
    return true;
  }
};
