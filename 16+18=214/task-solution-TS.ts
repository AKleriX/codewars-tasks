export function add(num1: number, num2: number): number {
  let str1: string = num1.toString(),
    str2: string = num2.toString(),
    maxLen: number = Math.max(str1.length, str2.length),
    sum: string = '';
  str1 = addZeros(str1, maxLen);
  str2 = addZeros(str2, maxLen);
  for (let i = maxLen - 1; i >= 0; i--) sum = +str1[i] + +str2[i] + sum;
  return +sum;
}

const addZeros = (s: string, l: number): string => '0'.repeat(l - s.length) + s;
