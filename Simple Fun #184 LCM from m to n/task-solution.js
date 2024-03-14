const mnLCM = (m, n) => {
  let currentLcm = Math.max(m, n);

  for (let i = currentLcm - 1; i >= Math.min(m, n); i--) currentLcm = lcm(currentLcm, i);

  return currentLcm;
};

const gcd = (a, b) => (!a ? b : gcd(b % a, a));

const lcm = (a, b) => Math.floor((a * b) / gcd(a, b));
