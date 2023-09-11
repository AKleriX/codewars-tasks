const mergeStrings = (first, second) => {
  let pos = 0;
  for (let i = 0; i < first.length; i++)
    if (second.startsWith(first.slice(i))) break;
    else pos++;
  return first.slice(0, pos) + second;
};
