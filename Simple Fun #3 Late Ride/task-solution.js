function lateRide(n) {
  let h = Math.floor(n / 60),
    m = n % 60;
  return [...h.toString(), ...m.toString()].reduce((s, d) => s + +d, 0);
}
