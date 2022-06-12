function perms(element) {
  let symbolsCounter = {},
    k = 1,
    str = element.toString();
  for (let i = 0; i < str.length; i++) symbolsCounter[str[i]] = (symbolsCounter[str[i]] || 0) + 1;
  for (let i in symbolsCounter) k *= fact(symbolsCounter[i]);
  return fact(str.length) / k;
}

const fact = (n) => (n === 1 ? 1 : n * fact(n - 1));
