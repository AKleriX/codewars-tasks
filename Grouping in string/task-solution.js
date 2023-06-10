const isConsecutive = (str) =>
  [...str.replace(/(.)\1*/g, (m) => m[0])].every((c, i, arr) => i === arr.indexOf(c));
