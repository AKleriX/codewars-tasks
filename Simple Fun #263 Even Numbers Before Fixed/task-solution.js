const evenNumbersBeforeFixed = (sequence, fixedElement) =>
  sequence.includes(fixedElement)
    ? sequence.slice(0, sequence.indexOf(fixedElement)).filter((n) => !(n % 2)).length
    : -1;
