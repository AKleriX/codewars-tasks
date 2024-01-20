const shortestTime = (n, m, speeds) =>
  Math.min(
    (n - 1) * speeds[3],
    Math.abs(n - m) * speeds[0] + (n - 1) * speeds[0] + speeds[1] * 2 + speeds[2],
  );
