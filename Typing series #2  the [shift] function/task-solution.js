const typeOut = (str) => {
  let result = '',
    holdShift = false,
    i = 0;

  while (i < str.length)
    if (str.startsWith('[shift]', i)) {
      i += 7;
      if (i < str.length && str[i] !== '[') {
        result += str[i].toUpperCase();
        i++;
      }
    } else if (str.startsWith('[holdshift]', i)) {
      holdShift = true;
      i += 11;
    } else if (str.startsWith('[unshift]', i)) {
      holdShift = false;
      i += 9;
    } else {
      result += holdShift ? str[i].toUpperCase() : str[i];
      i++;
    }

  return result;
};
