const numbersToString = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

function numbersOfLetters(integer) {
  let numsStr = [...integer.toString()].reduce((str, d) => str + numbersToString[d], ''),
    numsSeq = [numsStr];
  numsStr = [...numsSeq[0].length.toString()].reduce((str, d) => str + numbersToString[d], '');
  while (!numsSeq.includes(numsStr)) {
    numsSeq.push(numsStr);
    numsStr = [...numsSeq[numsSeq.length - 1].length.toString()].reduce(
      (str, d) => str + numbersToString[d],
      '',
    );
  }
  return numsSeq;
}
