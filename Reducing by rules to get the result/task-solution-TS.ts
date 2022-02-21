type RuleFunction = (a:number,b:number) => number;

export function reduceByRules(numbers:number[], rules:RuleFunction[]):number{
  return numbers.reduce((acc: number, num: number, i: number) => rules[(i - 1) % rules.length](acc, num));
}