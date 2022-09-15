const capitals = function (word) {
  let capIdxs = [];
  for (let i = 0; i < word.length; i++) if (word[i] === word[i].toUpperCase()) capIdxs.push(i);
  return capIdxs;
};
