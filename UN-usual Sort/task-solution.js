function unusualSort(arrayOfChars) {
  let nums = arrayOfChars.filter((s) => /\d/.test(s.toString())),
    letters = arrayOfChars.filter((s) => /[^\d]/.test(s.toString()));
  return letters.sort().concat(
    nums.sort((a, b) => {
      if (a.toString() !== b.toString() || a === b) return a - b;
      return typeof a === 'string' ? 1 : -1;
    }),
  );
}
