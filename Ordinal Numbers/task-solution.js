function ordinal(number, brief = false) {
  let lastDubleNums = number.toString().slice(-2);
  if (Number(lastDubleNums) > 10 && Number(lastDubleNums) < 14) return 'th';
  switch (lastDubleNums.slice(-1)) {
    case '1':
      return 'st';
    case '2':
      return brief ? 'd' : 'nd';
    case '3':
      return brief ? 'd' : 'rd';
  }
  return 'th';
}
