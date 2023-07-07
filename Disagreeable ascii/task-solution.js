const getWeight = (name) =>
  [...name].reduce(
    (s, c) =>
      (/[a-z]/.test(c)
        ? c.toUpperCase().charCodeAt(0)
        : /[A-Z]/.test(c)
        ? c.toLowerCase().charCodeAt(0)
        : 0) + s,
    0,
  );
