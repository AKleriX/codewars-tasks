const finalResult = (keywords, searchResult) =>
  searchResult.filter((v) => [...keywords].every((w) => v.includes(w)));
