const strCount = (obj) => {
  let vals = Array.isArray(obj) ? [...obj] : Object.values(obj),
    counter = 0;
  for (let i = 0; i < vals.length; i++)
    counter +=
      typeof vals[i] === 'string'
        ? 1
        : typeof vals[i] === 'object' && vals[i]
        ? strCount(vals[i])
        : 0;
  return counter;
};
