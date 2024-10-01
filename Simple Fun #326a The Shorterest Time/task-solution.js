const shorterestTime = (n, m, speeds) => {
  const [a, b, c, d] = speeds;

  if (n === 0) return 0;

  const walkTime = n * d,
    elevatorDirectTime = Math.abs(n - m) * a + b + c + n * a + b,
    elevatorWalkToMTime = Math.abs(n - m) * d + b + c + m * a + b;

  return Math.min(walkTime, elevatorDirectTime, elevatorWalkToMTime);
};
