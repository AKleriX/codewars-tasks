const getDividers = (values, powers) => {
  const result = new Set([1]);

  const generate = (index, current) => {
    if (index === values.length) return;

    for (let i = 0; i <= powers[index]; i++) {
      const next = current * values[index] ** i;
      result.add(next);
      generate(index + 1, next);
    }
  };

  generate(0, 1);

  return [...result].sort((a, b) => a - b);
};
