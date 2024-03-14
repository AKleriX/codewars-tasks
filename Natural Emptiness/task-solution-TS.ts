type arr = arr[];
export const repSet = (n: number): arr => {
  let set: arr = [];
  for (let i: number = 0; i < n; i++) set = [...set, set];
  return set;
};
