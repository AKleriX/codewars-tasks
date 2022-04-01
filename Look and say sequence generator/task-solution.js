function lookAndSaySequence(firstElement, n) {
  let currentSeq = firstElement + '';
  for (let i = 1; i < n; i++)
    currentSeq = currentSeq.replace(/(.)\1*/g, (match) => match.length.toString() + match[0]);
  return currentSeq;
}
