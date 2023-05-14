function communicationModule(packet) {
  const ops = {
    '0F12': (a, b) => +a + +b,
    B7A2: (a, b) => +a - +b,
    C3D9: (a, b) => +a * +b,
  };
  let pac = packet.match(/.{4}/g);
  pac[2] = ops[pac[1]](pac[2], pac[3]);
  if (pac[2] < 0) pac[2] = 0;
  else if (pac[2] > 9999) pac[2] = 9999;
  pac[2] = pac[2].toString().padStart(4, '0');
  pac[1] = 'FFFF';
  pac[3] = '0000';
  return pac.join('');
}
