export function polydivisible(x: number): boolean {
  let numStr: string = x.toString();
  for (let i = 1; i <= numStr.length; i++) if (+numStr.slice(0, i) % i !== 0) return false;
  return true;
}
