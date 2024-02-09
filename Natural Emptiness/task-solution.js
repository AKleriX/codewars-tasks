const repSet = (n) => {
  let set = [];
  for (let i = 0; i < n; i++) set = [...set, set];
  return set;
};
