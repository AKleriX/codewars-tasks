function findTheKey(message, code) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let currentCode = [],
    resultStr = '';
  for (let i = 0; i < message.length; i++)
    currentCode.push(Math.abs(letters.indexOf(message[i]) + 1 - code[i]));
  for (let i = 0; i < currentCode.length; i++) {
    resultStr += currentCode[i];
    if (isRepeatSeq(currentCode.join(''), resultStr)) return Number(resultStr);
  }
  return Number(resultStr);
}

const isRepeatSeq = (seq, subSeq) => {
  for (let i = 0; i < seq.length; i++) if (seq[i] !== subSeq[i % subSeq.length]) return false;
  return true;
};
