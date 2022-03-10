export function well(x: string[]): string {
  let goodIdeasCounter: number = x.reduce(
    (counter: number, idea: string) => (idea === 'good' ? counter + 1 : counter),
    0,
  );
  return goodIdeasCounter > 2 ? 'I smell a series!' : goodIdeasCounter > 0 ? 'Publish!' : 'Fail!';
}
