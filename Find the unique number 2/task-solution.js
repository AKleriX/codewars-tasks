// first solution

function findUnique(numbers) {
  let counter = numbers.reduce(
    (count, n) => (count[n] ? (count[n]++, count) : ((count[n] = 1), count)),
    {},
  );
  return +Object.keys(counter).filter((n) => counter[n] === 1)[0];
}

//better solution

const findUnique = (numbers) => numbers.reduce((a, b) => a ^ b);

// another one solution

function findUnique(numbers) {
  let collect = new Set();
  numbers.forEach((n) => {
    if (collect.has(n)) collect.delete(n);
    else collect.add(n);
  });
  return collect.values().next().value;
}
