const convertCF = (num, scale = 'c') => {
  switch (scale) {
    case 'c':
      return ((num - 32) / 9) * 5;
    case 'f':
      return (num * 9) / 5 + 32;
  }
  throw new Error('InvalidArgumentException');
};
