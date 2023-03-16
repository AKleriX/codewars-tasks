function michaelPays(costs) {
  const katePart = costs < 5 ? 0 : costs / 3 > 10 ? 10 : costs / 3;
  return Math.round((costs - katePart) * 100) / 100;
}
