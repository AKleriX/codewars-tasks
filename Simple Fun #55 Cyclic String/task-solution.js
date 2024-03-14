const cyclicString = (s) => {
  let c = 1;
  while (!s.startsWith(s.slice(c++)));
  return --c;
};
