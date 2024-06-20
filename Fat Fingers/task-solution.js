const fatFingers = (str) => {
  let capsLock = false,
    res = '';
  if (!str) return str;
  for (let char of str) {
    if (char.toLowerCase() === 'a') capsLock = !capsLock;
    else
      res += capsLock
        ? char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
        : char;
  }
  return res;
};
