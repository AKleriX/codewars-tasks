const numCombo = (arr, num) => {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) if (i !== j) sum += arr[j];
    if (sum === num) c++;
  }
  return c;
};
