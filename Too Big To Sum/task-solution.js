const certainSum = (a, b) => {
  if (a.toString(2).length <= 53 && b.toString(2).length <= 53 && (a + b).toString(2).length <= 53)
    return a + b;
  return false;
};
