const trim = (str, size) =>
  str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';
