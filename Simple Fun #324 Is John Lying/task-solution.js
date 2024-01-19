const isJohnLying = (a, b, s) =>
  (Math.abs(a) + Math.abs(b)) % 2 === s % 2 && s >= Math.abs(a) + Math.abs(b);
