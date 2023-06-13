function cubeTimes(times) {
  let min = Math.min(...times),
    max = Math.max(...times);
  return [
    Math.round(
      (times.reduce((s, t) => s + (t === min || t === max ? 0 : t), 0) / (times.length - 2)) * 100,
    ) / 100,
    min,
  ];
}
