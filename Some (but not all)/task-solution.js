const someButNotAll = (seq, pred) => {
  const array = [...seq];
  return array.some((x) => pred(x)) && !array.every((x) => pred(x));
};
