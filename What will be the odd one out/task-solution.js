function oddOneOut(str) {
  let symbolsCounter = {},
    resArr = [];
  for (let i = 0; i < str.length; i++) symbolsCounter[str[i]] = (symbolsCounter[str[i]] || 0) + 1;
  for (let i = 0; i < str.length; i++)
    if (symbolsCounter[str[i]] % 2 && str.lastIndexOf(str[i]) === i) resArr.push(str[i]);
  return resArr;
}
