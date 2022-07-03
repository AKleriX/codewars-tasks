function sortString(s) {
  let letters = [...s.replace(/[^a-zA-Z]/gi, '')]
      .map((l, i) => [l, i])
      .sort((a, b) => {
        if (a[0].toLowerCase() === b[0].toLowerCase()) return a[1] - b[1];
        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
      })
      .map((l) => l[0]),
    newStr = '';
  return s.replace(/[a-z]/gi, () => letters.shift());
}
