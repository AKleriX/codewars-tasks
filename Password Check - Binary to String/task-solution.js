function decodePass(passArr, bin) {
  let pas = bin
      .split(' ')
      .map((b) => String.fromCharCode(parseInt(b, 2)))
      .join(''),
    pasIdx = passArr.indexOf(pas);
  return pasIdx > -1 ? pas : false;
}
