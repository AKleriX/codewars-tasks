function sc(array) {
  const funcs = {
    '/': (a, b) => {
      let maxDiv = Math.max(
        a / b === Infinity ? -Infinity : a / b,
        b / a === Infinity ? -Infinity : b / a,
      );
      return isNaN(maxDiv) ? -Infinity : maxDiv;
    },
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => Math.max(a - b, b - a),
  };
  let max = -Infinity;
  for (let i = 0; i < array.length - 1; i++)
    for (let j = i + 1; j < array.length; j++)
      max = Math.max(
        max,
        Math.max.apply(
          null,
          Object.keys(funcs).map((f) => funcs[f](array[i], array[j])),
        ),
      );
  return max;
}
