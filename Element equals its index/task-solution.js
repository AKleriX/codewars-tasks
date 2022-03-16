function indexEqualsValue(a) {
  let min = 0,
    max = a.length - 1,
    res = -1;
  while (min <= max) {
    let currentIndex = Math.floor((min + max) / 2);
    if (a[currentIndex] === currentIndex) res = currentIndex;
    if (a[currentIndex] < currentIndex) min = currentIndex + 1;
    else max = currentIndex - 1;
  }
  return res;
}
