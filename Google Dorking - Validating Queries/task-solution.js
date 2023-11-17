const isValid = (query) =>
  query.split(/\s/).every((q) => FILTERS.includes(q.split(':')[0]) || !q.includes(':'));
