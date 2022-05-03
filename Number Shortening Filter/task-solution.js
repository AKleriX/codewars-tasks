function shortenNumber(suffixes, base) {
  return function (str) {
    if (typeof str !== 'string' || Number(str).toString() !== str) return str.toString();
    let num = Number(str),
      res = '';
    for (let i = suffixes.length - 1; i >= 0; i--) {
      if (num >= base ** i) {
        res = Math.trunc(num / base ** i) + suffixes[i];
        break;
      }
    }
    return res;
  };
}
