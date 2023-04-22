function unflatten(flatArray) {
  let res = [];
  for (let i = 0; i < flatArray.length; i++)
    if (flatArray[i] < 3) res.push(flatArray[i]);
    else {
      res.push(flatArray.slice(i, (i = i + flatArray[i])));
      i--;
    }
  return res;
}
