const merryChristmas = (funcs) => {
  const str = 'Merry Christmas!';
  let res = [];
  for (let i = 0; i < str.length; i++) res.push(funcs[funcs.findIndex((f) => f() === str[i])].name);
  return res.join(',');
};
