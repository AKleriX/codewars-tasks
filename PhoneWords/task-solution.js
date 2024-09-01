const keypadMapping = {
  0: ' ',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const splitInGroups = (digits) => digits.match(/(\d)\1*/g);

const phoneWords = (digits) => {
  const digitGroups = splitInGroups(digits);
  return (
    digitGroups
      ?.map((digitGroup) => {
        if (digitGroup.includes('1')) return '';
        const keypadChars = keypadMapping[digitGroup[0]];
        const fullCycles = Math.floor(digitGroup.length / keypadChars.length);
        const remainder = digitGroup.length % keypadChars.length;
        return (
          keypadChars.slice(-1).repeat(fullCycles) +
          (remainder > 0 ? keypadChars[remainder - 1] : '')
        );
      })
      .join('') || ''
  );
};
