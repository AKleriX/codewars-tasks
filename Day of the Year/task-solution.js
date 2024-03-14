const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const toDayOfYear = (arr) => {
  let num = 0;
  for (let i = 1; i < arr[1]; i++)
    num +=
      months[i - 1] +
      (i === 2 && ((arr[2] % 4 === 0 && arr[2] % 100 !== 0) || arr[2] % 400 === 0) ? 1 : 0);
  return num + arr[0];
};
