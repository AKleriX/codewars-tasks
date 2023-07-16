function redistributeWealth(wealth) {
  const avr = wealth.reduce((s, w) => s + w, 0) / wealth.length,
    len = wealth.length;
  for (let i = 0; i < len; i++) {
    wealth.shift();
    wealth.push(avr);
  }
}
