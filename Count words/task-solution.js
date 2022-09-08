function wordCount(s) {
  let words = s.match(/[a-z]+/gi) || [];
  return words.filter((w) => !/^(a|the|on|at|of|upon|in|as)$/i.test(w)).length;
}
