const stonePick = (arr) => {
  let counter = [0, 0];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === 'Wood') counter[1] += 4;
    else if (arr[i] === 'Sticks') counter[1]++;
    else if (arr[i] === 'Cobblestone') counter[0]++;
  return Math.min((counter[0] / 3) | 0, (counter[1] / 2) | 0);
};
