function ipv4Parser(ip, mask) {
  let ipCode = ip.split('.'),
    maskCode = mask.split('.'),
    netIp = [],
    hostIp = [];
  for (let i = 0; i < 4; i++) {
    netIp.push(+ipCode[i] & +maskCode[i]);
    hostIp.push(+ipCode[i] - netIp[i]);
  }
  return [netIp.join('.'), hostIp.join('.')];
}
