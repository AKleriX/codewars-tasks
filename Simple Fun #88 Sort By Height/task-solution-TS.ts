export const sortByHeight = (list: number[]): number[] => {
  let sortArr: number[] = list.filter((n) => n !== -1).sort((a, b) => a - b),
    res: number[] = [],
    counter = 0;
  for (let i = 0; i < list.length; i++) res.push(list[i] === -1 ? -1 : sortArr[counter++]);
  return res;
};
