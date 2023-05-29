function sortByHeight(a) {
  let sortArr = a.filter((n) => n !== -1).sort((a, b) => a - b),
    res = [];
  for (let i = 0; i < a.length; i++) res.push(a[i] === -1 ? -1 : sortArr.shift());
  return res;
}
