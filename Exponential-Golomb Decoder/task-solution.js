function decoder(sequence) {
  let decodeNums = [],
    seq = [...sequence];
  while (seq.length) {
    let idxFirstOne = seq.indexOf('1'),
      firstZeros = seq.slice(0, idxFirstOne),
      binNum = seq.slice(idxFirstOne, idxFirstOne + firstZeros.length + 1);
    decodeNums.push(parseInt(binNum.join(''), 2) - 1);
    seq = seq.slice(idxFirstOne + firstZeros.length + 1);
  }
  return decodeNums;
}
