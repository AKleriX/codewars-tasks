const obtainMaxNumber = (arr) => {
  arr = Array.from(
    arr
      .sort((a, b) => a - b)
      .reduce((acc, num) => {
        const last = acc[acc.length - 1];
        if (last && last[0] === num) {
          last.push(num);
        } else {
          acc.push([num]);
        }
        return acc;
      }, []),
  );

  if (arr.every((group) => group.length === 1)) return Math.max(...arr.flat());

  for (let i = 0; i < arr.length; i++)
    if (arr[i].length > 1) arr[i] = [arr[i][0] * 2, ...arr[i].slice(2)];

  return obtainMaxNumber(arr.flat());
};

const isInfiniteProcess = (a, b) => a % 2 !== b % 2 || a > b;
