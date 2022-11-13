function dbSort(a) {
  let nums = a.filter((n) => typeof n === 'number').sort((a, b) => a - b),
    strs = a.filter((s) => typeof s === 'string').sort();
  return nums.concat(strs);
}
