const findChildren = (santasList, children) =>
  Array.from(new Set(children))
    .filter((c) => santasList.includes(c))
    .sort();
