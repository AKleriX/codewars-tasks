export function counter(): Function {
  let counter: number = 0;
  return () => ++counter;
}
