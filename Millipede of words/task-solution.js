const solution = (words) => {
  const dfs = (w, r) => {
    if (!r.length) return true;
    return r.some(
      (n, i) => w[w.length - 1] === n[0] && dfs(n, r.slice(0, i).concat(r.slice(i + 1))),
    );
  };
  return words.some((word, i) => dfs(word, words.slice(0, i).concat(words.slice(i + 1))));
};
