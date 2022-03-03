const makeChange = (amount) => {
  let counter = {},
      h = Math.trunc(amount / 50);
  if (h) counter['H'] = h;
  amount = amount % 50;
  let q = Math.trunc(amount / 25);
  if (q) counter['Q'] = q;
  amount = amount % 25;
  let d = Math.trunc(amount / 10);
  if (d) counter['D'] = d;
  amount = amount % 10;
  let n = Math.trunc(amount / 5);
  if (n) counter['N'] = n;
  amount = amount % 5;
  if (amount) counter['P'] = amount;
  return counter;
};