export const calc = (x: string): number => {
  let num: string = [...x].map((l) => l.charCodeAt(0)).join('');
  return (
    [...num].reduce((s, d) => s + +d, 0) - [...num.replace(/7/g, '1')].reduce((s, d) => s + +d, 0)
  );
};
