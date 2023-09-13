const conjugate = (verb) => {
  const dict = {
      ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
      er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
      ir: ['o', 'es', 'e', 'imos', 'ís', 'en'],
    },
    ending = verb.slice(-2);
  let res = {};
  res[verb] = dict[ending].map((e) => verb.slice(0, -2) + e);
  return res;
};
