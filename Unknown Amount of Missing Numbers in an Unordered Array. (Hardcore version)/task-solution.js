function missNumsFinder(arr) {
  let n = 0,
    numsCounter = [],
    missNums = [];
  for (let i = 0; i < arr.length; i++) if (n < arr[i]) n = arr[i];
  for (let i = 0; i <= n; i++) numsCounter[i] = 0;
  for (let i = 0; i < arr.length; i++) numsCounter[arr[i]] += 1;
  for (let i = 1; i <= n; i++) if (!numsCounter[i]) missNums.push(i);
  return missNums;
}
