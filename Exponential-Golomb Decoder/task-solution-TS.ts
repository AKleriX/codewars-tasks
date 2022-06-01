export function decoder(sequence: string): number[] {
  let decodeNums: number[] = [],
    seq: string[] = [...sequence];
  while (seq.length) {
    let idxFirstOne: number = seq.indexOf('1'),
      firstZeros: string[] = seq.slice(0, idxFirstOne),
      binNum: string[] = seq.slice(idxFirstOne, idxFirstOne + firstZeros.length + 1);
    decodeNums.push(parseInt(binNum.join(''), 2) - 1);
    seq = seq.slice(idxFirstOne + firstZeros.length + 1);
  }
  return decodeNums;
}
