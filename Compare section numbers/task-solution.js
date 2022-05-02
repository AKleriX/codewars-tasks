function cmp(section1, section2) {
  let arr1 = (
      section1 + '.0'.repeat(Math.max(section1.length, section2.length) - section1.length)
    ).split('.'),
    arr2 = (
      section2 + '.0'.repeat(Math.max(section1.length, section2.length) - section2.length)
    ).split('.');
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (Number(arr1[i]) > Number(arr2[i])) return 1;
    if (Number(arr2[i]) > Number(arr1[i])) return -1;
  }
  return 0;
}
