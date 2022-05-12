function atm(value) {
  let cur = value.replace(/[^\d]/g, ''),
    val = value.replace(/[^a-z]/gi, '').toUpperCase(),
    counter = [];
  if (!VALUES.hasOwnProperty(val)) return `Sorry, have no ${val}.`;
  else if (cur % VALUES[val][0])
    return `Can't do ${cur} ${val}. Value must be divisible by ${VALUES[val][0]}!`;
  for (let i = VALUES[val].length - 1; i >= 0, cur > 0; i--)
    if (Math.trunc(cur / VALUES[val][i]) > 0) {
      counter.push(`${Math.trunc(cur / VALUES[val][i])} * ${VALUES[val][i]} ${val}`);
      cur %= VALUES[val][i];
    }
  return counter.join(', ');
}
