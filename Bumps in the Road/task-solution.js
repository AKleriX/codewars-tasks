function bump(x) {
  let bumps = x.match(/n/g) || [];
  return bumps.length > 15 ? 'Car Dead' : 'Woohoo!';
}
