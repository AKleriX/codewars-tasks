const myLanguages = (res) =>
  Object.keys(res)
    .filter((l) => res[l] >= 60)
    .sort((a, b) => res[b] - res[a]);
