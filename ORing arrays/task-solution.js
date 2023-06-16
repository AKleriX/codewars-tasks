function orArrays(arr1, arr2, un = 0) {
  let res = [];
  while (arr1.length || arr2.length) {
    let n1 = arr1.shift(),
      n2 = arr2.shift();
    if (n1 === undefined) res.push(n2 | un);
    else if (n2 === undefined) res.push(n1 | un);
    else res.push(n1 | n2);
  }
  return res;
}
