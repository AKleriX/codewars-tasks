const toBrainfuck = (string) => {
  let bfCode = '',
    currentValue = 0;

  for (let i = 0; i < string.length; i++) {
    let targetValue = string.charCodeAt(i),
      difference = targetValue - currentValue;

    if (difference > 0) bfCode += '+'.repeat(difference);
    else bfCode += '-'.repeat(-difference);
    bfCode += '.';
    currentValue = targetValue;
  }

  return bfCode;
};
