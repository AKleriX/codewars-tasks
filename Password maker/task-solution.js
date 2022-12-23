const makePassword = (phrase) => {
  let rep = {
    i: 1,
    o: 0,
    s: 5,
  };
  return phrase
    .split(' ')
    .reduce(
      (p, w) => p + (rep.hasOwnProperty(w[0].toLowerCase()) ? rep[w[0].toLowerCase()] : w[0]),
      '',
    );
};
