function flatten() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++)
    if (Array.isArray(arguments[i])) arr.push(...flatten(...arguments[i]));
    else arr.push(arguments[i]);
  return arr;
}
