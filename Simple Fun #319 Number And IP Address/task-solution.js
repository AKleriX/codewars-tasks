function numberAndIPaddress(s) {
  if (s.includes('.')) return getNumFromIP(s);
  return getIPFromNum(s);
}

const getNumFromIP = (ip) =>
  parseInt(
    ip
      .split('.')
      .map((n) => {
        let bits = Number(n).toString(2);
        if (bits.length < 8) bits = '0'.repeat(8 - bits.length) + bits;
        return bits;
      })
      .join(''),
    2,
  ).toString();

const getIPFromNum = (num) => {
  let bits = Number(num).toString(2),
    ip = [];
  if (bits.length < 32) bits = '0'.repeat(32 - bits.length) + bits;
  for (let i = 0; i < bits.length; i += 8) ip.push(parseInt(bits.slice(i, i + 8), 2));
  return ip.join('.');
};
