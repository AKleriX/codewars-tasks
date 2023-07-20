function interest(P, r, n) {
  return [getSimpleInterest(P, r, n), getCompInterest(P, r, n)];
}

const getSimpleInterest = (P, r, n) => Math.round(P + P * r * n);

const getCompInterest = (P, r, n) => {
  let currentP = P;
  for (let i = 0; i < n; i++) currentP += currentP * r;
  return Math.round(currentP);
};
