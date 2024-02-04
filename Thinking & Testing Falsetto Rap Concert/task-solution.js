const testit = (s) =>
  [...s]
    .map((l, i) => {
      const dif = l.charCodeAt(0) - (l.toUpperCase() === l ? 65 : 97) + (i % 2 ? -1 : 1);
      return /[a-z]/i.test(l)
        ? String.fromCharCode((dif < 0 ? 25 : dif % 26) + (l.toUpperCase() === l ? 65 : 97))
        : l;
    })
    .join('');
