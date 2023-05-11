const arrayPacking = (a) =>
  parseInt(
    a.reduce((b, n) => n.toString(2).padStart(8, '0') + b, ''),
    2,
  );
