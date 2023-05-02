const lottery = (str) => {
  let ints = Array.from(new Set([...str].filter((s) => /\d/.test(s))));
  return ints.length ? ints.join('') : 'One more run!';
};
