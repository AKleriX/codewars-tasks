function convergence(n) {
  let testSeq = [n],
    baseSeq = [1];
  while (testSeq[testSeq.length - 1] !== baseSeq[baseSeq.length - 1])
    if (testSeq[testSeq.length - 1] < baseSeq[baseSeq.length - 1])
      testSeq.push(getNextSeqNum(testSeq[testSeq.length - 1]));
    else baseSeq.push(getNextSeqNum(baseSeq[baseSeq.length - 1]));
  return testSeq.length - 1;
}

const getNextSeqNum = (num) => {
  return num + [...num.toString()].reduce((mul, n) => (n !== '0' ? mul * n : mul), 1);
};
