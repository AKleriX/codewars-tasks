function bucketize(arr) {
  let res = new Array(arr.length + 1).fill(null),
    counter = {};
  for (let i = 0; i < arr.length; i++) counter[arr[i]] = (counter[arr[i]] || 0) + 1;
  for (let el in counter)
    if (res[counter[el]]) res[counter[el]].push(+el);
    else res[counter[el]] = [+el];
  return res.map((el) => (el ? el.sort((a, b) => a - b) : el));
}
