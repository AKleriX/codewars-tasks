const zipObject = (keys = [], values = []) => {
  let result = {};

  if (Array.isArray(keys[0]))
    keys.forEach((pair) => {
      if (Array.isArray(pair) && pair.length > 0)
        result[pair[0]] = pair.length > 1 ? pair[1] : undefined;
    });
  else
    keys.forEach((key, index) => {
      result[key] = index < values.length ? values[index] : undefined;
    });

  return result;
};
