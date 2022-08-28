export function solve(s: string): string {
  let currentStr: string[] = s
      .replace(/\[backspace\]\*(\d+)/g, (_, n) => '[backspace]'.repeat(+n))
      .split('[backspace]'),
    resultStr: string = '';
  for (let i = 0; i < currentStr.length; i++) resultStr = resultStr.slice(0, -1) + currentStr[i];
  return resultStr;
}
