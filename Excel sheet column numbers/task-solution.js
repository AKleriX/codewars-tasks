const titleToNumber = (title) =>
  [...title].reduce((res, n) => res * 26 + (n.charCodeAt(0) - 65) + 1, 0);
