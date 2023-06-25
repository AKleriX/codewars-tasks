export const equalize = (array: number[]): string[] =>
  array.map((n, _, arr) => {
    let dif: number = n - arr[0];
    return dif >= 0 ? '+' + dif : dif.toString();
  });
