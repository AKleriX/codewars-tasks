const findOddDigits = (n, k) => {
  const strN = n.toString();
  let res = '';
  for (let i = 0; i < strN.length && res.length < k; i++) if (+strN[i] % 2) res += strN[i];
  return res.length === k ? +res : 0;
};
