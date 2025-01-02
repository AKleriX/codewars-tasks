const eqAll = (iterable) => {
  const iterator = iterable[Symbol.iterator](),
    first = iterator.next();

  if (first.done) return true;

  const value = first.value;

  let next = null;

  while (!(next = iterator.next()).done) if (next.value !== value) return false;

  return true;
};
