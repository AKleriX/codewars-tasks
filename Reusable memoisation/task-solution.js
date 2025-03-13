const memo = (fn) => {
  const cache = new Map(),
    memoized = (...args) => {
      const key = args.length === 1 ? args[0] : JSON.stringify(args);
      if (cache.has(key)) return cache.get(key);
      const result = fn(...args);
      cache.set(key, result);
      return result;
    };
  return memoized;
};
