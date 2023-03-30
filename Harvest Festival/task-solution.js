function plant(seed, water, fert, temp) {
  let pattern = ('-'.repeat(water) + seed.repeat(fert)).repeat(water);
  return temp >= 20 && temp <= 30
    ? pattern
    : pattern.replace(new RegExp('\\' + seed + '(?!\b)', 'g'), '') + seed;
}
