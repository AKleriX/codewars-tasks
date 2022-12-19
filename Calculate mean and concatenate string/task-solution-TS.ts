export const mean = (lst: string[]): [number, string] => {
  let counter: [number, string] = lst.reduce(
    (arr: [number, string], el: string): [number, string] => (
      /\d/.test(el) ? (arr[0] += +el) : (arr[1] += el), arr
    ),
    [0, ''],
  );
  counter[0] /= 10;
  return counter;
};
