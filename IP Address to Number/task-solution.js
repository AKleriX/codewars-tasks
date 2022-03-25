function ipToNum(ip) {
  return parseInt(
    ip
      .split('.')
      .map((n) => {
        let bits = Number(n).toString(2);
        return '0'.repeat(8 - bits.length) + bits;
      })
      .join(''),
    2,
  );
}

function numToIp(num) {
  let bits = '0'.repeat(32 - num.toString(2).length) + num.toString(2),
    ip = [];
  for (let i = 0; i < bits.length; i += 8) ip.push(parseInt(bits.slice(i, i + 8), 2));
  return ip.join('.');
}
