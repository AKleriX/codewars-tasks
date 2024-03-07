const numberOfClans = (divisors, k) => {
  let c = [];
  for (let i = 1; i <= k; i++) {
    let div = [];
    for (let j = 0; j < divisors.length; j++) if (!(i % divisors[j])) div.push(divisors[j]);
    if (!c.includes(div.join())) c.push(div.join());
  }
  return c.length;
};
