export function splitAllEvenNumbers(numbers: number[], way: number): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (!(numbers[i] % 2)) {
      switch (way) {
        case 0:
          if (!((numbers[i] / 2) % 2))
            newArr = newArr.concat([numbers[i] / 2 - 1, numbers[i] / 2 + 1]);
          else newArr = newArr.concat([numbers[i] / 2, numbers[i] / 2]);
          break;
        case 1:
          newArr = newArr.concat([1, numbers[i] - 1]);
          break;
        case 2:
          let j: number =
            Math.floor(numbers[i] / 2) % 2
              ? Math.floor(numbers[i] / 2)
              : Math.floor(numbers[i] / 2) - 1;
          for (; j > 0; j -= 2)
            if (!(numbers[i] % j)) {
              for (let k = 1; k <= numbers[i] / j; k++) newArr.push(j);
              break;
            }
          break;
        case 3:
          for (let k = 1; k <= numbers[i]; k++) newArr.push(1);
          break;
      }
    } else newArr.push(numbers[i]);
  }
  return newArr;
}
