function scanner(qrcode) {
  let bits = '',
    idx = 20,
    shift = 0,
    up = true,
    s = '',
    str = '';
  while (bits.length < 76) {
    let [x1, x2] = [20 - shift, 19 - shift];
    bits += !((x1 + idx) % 2) ? (qrcode[idx][x1] === 1 ? 0 : 1) : qrcode[idx][x1] === 1 ? 1 : 0;
    bits += !((x2 + idx) % 2) ? (qrcode[idx][x2] === 1 ? 0 : 1) : qrcode[idx][x2] === 1 ? 1 : 0;
    idx += up ? -1 : 1;
    if (idx < 9) [idx, shift, up] = [9, shift + 2, false];
    else if (idx > 20) [idx, shift, up] = [20, shift + 2, true];
  }
  s = parseInt(bits.slice(4, 12), 2);
  for (let i = 12; i < 12 + 8 * s; i += 8)
    str += String.fromCharCode(parseInt(bits.slice(i, i + 8), 2));
  return str;
}
