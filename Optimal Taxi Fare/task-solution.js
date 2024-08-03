const calculateOptimalFare = (D, T, V1, R, V2) => {
  T = T / 60.0;

  if (D / V2 <= T) return '0.00';

  if (D / V1 > T) return "Won't make it!";

  const t2 = (V1 * T - D) / (V1 - V2),
    d2 = V2 * t2,
    d1 = D - d2,
    fare = R * d1;

  return fare.toFixed(2);
};
