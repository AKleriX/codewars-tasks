function int32ToIp(int32){
  let bits = int32.toString(2),
      ip = [];
  if (bits.length < 32) bits = '0'.repeat(32 - bits.length) + bits;
  for (let i = 0; i < 32; i += 8)
    ip.push(bits.slice(i, i + 8));
  return ip.map(n => parseInt(n, 2)).join('.');
}