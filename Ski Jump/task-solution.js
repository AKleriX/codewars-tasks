function skiJump(mountain) {
  const h = mountain.length,
    l = +((h * (h * 1.5) * 9) / 10).toFixed(2);
  return l < 10
    ? `${l.toFixed(2)} metres: He's crap!`
    : l <= 25
    ? `${l.toFixed(2)} metres: He's ok!`
    : l <= 50
    ? `${l.toFixed(2)} metres: He's flying!`
    : `${l.toFixed(2)} metres: Gold!!`;
}
