const cutFruits = (fruits) =>
  fruits.reduce(
    (r, e) =>
      !fruitsName.includes(e)
        ? [...r, e]
        : [...r, e.slice(0, Math.ceil(e.length / 2)), e.slice(Math.ceil(e.length / 2))],
    [],
  );
