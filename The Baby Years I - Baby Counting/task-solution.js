const babyCount = (x) => {
  let dict = {
    b: 0,
    a: 0,
    y: 0,
  };
  for (let i = 0; i < x.length; i++)
    if (dict.hasOwnProperty(x[i].toLowerCase())) dict[x[i].toLowerCase()]++;
  dict['b'] = (dict['b'] / 2) | 0;
  return Math.min(...Object.values(dict)) ? Math.min(...Object.values(dict)) : "Where's the baby?!";
};
