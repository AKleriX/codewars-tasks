function string_evaluation(string, condition) {
  let counter = [...string].reduce((c, s) => {
      c[s] = (c[s] || 0) + 1;
      return c;
    }, {}),
    cons = {
      '<': (a, b) => a < b,
      '<=': (a, b) => a <= b,
      '>': (a, b) => a > b,
      '>=': (a, b) => a >= b,
      '==': (a, b) => a === b,
      '!=': (a, b) => a !== b,
    };
  return condition.map((con) => {
    let [first, second] = con
        .replace(/[!=<>]/g, ' ')
        .split(/\s+/)
        .map((n) => (isNaN(+n) ? counter[n] : +n)),
      s = con.replace(/[^!=<>]/g, ' ').trim();
    return cons[s](first, second);
  });
}