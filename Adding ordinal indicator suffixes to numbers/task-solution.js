function numberToOrdinal(n) {
  let lastTwoDigit = n.toString().slice(-2);
  if (lastTwoDigit.length === 2)
    if (+lastTwoDigit >= 11 && +lastTwoDigit <= 13) return n + 'th';
    else return getEndForLastSymbol(lastTwoDigit[1], n);
  return lastTwoDigit !== '0' ? getEndForLastSymbol(lastTwoDigit, n) : '0';
}

const getEndForLastSymbol = (lastSymbol, fullNum) => {
  switch (lastSymbol) {
    case '1':
      return fullNum + 'st';
    case '2':
      return fullNum + 'nd';
    case '3':
      return fullNum + 'rd';
    default:
      return fullNum + 'th';
  }
};
