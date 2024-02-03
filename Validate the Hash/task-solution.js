const malwareValidate = (hashArr) =>
  Array.from(
    new Set(
      hashArr.filter((h) => {
        const [l, n] = [...h].reduce(
          (c, v) => (/[a-z]/.test(v) ? c[0]++ : /\d/.test(v) ? c[1]++ : 0, c),
          [0, 0],
        );
        return l === 5 && n === 5 && h.length === 10;
      }),
    ),
  );
