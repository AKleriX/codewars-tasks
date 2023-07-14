const solve = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) if (str[i] !== str[str.length - 1 - i]) counter++;
  return counter === 2 || (counter === 0 && str.length % 2 === 1);
};
