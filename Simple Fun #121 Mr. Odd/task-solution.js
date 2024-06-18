const odd = (str) => {
  let c = 0,
    oPos = 0;

  while (oPos < str.length) {
    oPos = str.indexOf('o', oPos);
    if (oPos === -1) break;

    let d1Pos = str.indexOf('d', oPos + 1);
    if (d1Pos === -1) break;

    let d2Pos = str.indexOf('d', d1Pos + 1);
    if (d2Pos === -1) break;

    c++;

    str =
      str.slice(0, oPos) +
      '_' +
      str.slice(oPos + 1, d1Pos) +
      '_' +
      str.slice(d1Pos + 1, d2Pos) +
      '_' +
      str.slice(d2Pos + 1);

    oPos++;
  }

  return c;
};
