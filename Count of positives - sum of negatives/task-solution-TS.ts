export function countPositivesSumNegatives(input: any):number[] {
    return input && input.length ? input.reduce((counter: number[], n: number) => n > 0 ? [counter[0] + 1, counter[1]] : 
                                                (n < 0 ? [counter[0], counter[1] + n] : counter), [0, 0]) : [];
  }