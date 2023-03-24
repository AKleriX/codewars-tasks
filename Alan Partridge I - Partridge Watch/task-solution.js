function part(x) {
  const dict = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];
  let counter = 0;
  for (let i = 0; i < x.length; i++) if (dict.includes(x[i])) counter++;
  return counter
    ? "Mine's a Pint" + '!'.repeat(counter)
    : "Lynn, I've pierced my foot on a spike!!";
}
