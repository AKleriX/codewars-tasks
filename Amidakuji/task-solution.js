function amidakuji(ar) {
  let arr = new Array(ar[0].length + 1).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    let pos = i;
    for (let j = 0; j < ar.length; j++)
      if (ar[j][pos] === '1') pos++;
      else if (ar[j][pos - 1] === '1') pos--;
    arr[pos] = i;
  }
  return arr;
}
