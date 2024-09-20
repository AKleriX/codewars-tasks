const fizzBuzzReloaded = (start, stop, step, functions) => {
  let result = [];

  if (step > 0) for (let i = start; i <= stop; i += step) result.push(applyFuncs(i, functions));
  else for (let i = start; i >= stop; i += step) result.push(applyFuncs(i, functions));
  return result.join(' ');
};

const applyFuncs = (num, functions) => {
  let output = '';

  for (let [key, func] of functions) if (func(num)) output += key;

  return output || num.toString();
};
