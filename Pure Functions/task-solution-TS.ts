type State = { modifier: number };

const state: State = { modifier: 2 };

export const solution = (arr: number[], options: State) => {
  const newArr: number[] = [];
  for (let i = 0; i < arr.length; ++i) newArr.push(arr[i] + 2 * options.modifier);
  return newArr;
};
