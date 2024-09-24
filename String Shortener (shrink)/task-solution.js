const shorten = (string, length, glue = '...') => {
  if (string.length <= length) return string;

  if (length <= glue.length + 1) return string.slice(0, length);

  const partLength = Math.floor((length - glue.length) / 2),
    secondPartLength =
      string.length > length ? partLength + ((length - glue.length) % 2) : partLength;

  return string.slice(0, partLength) + glue + string.slice(string.length - secondPartLength);
};
