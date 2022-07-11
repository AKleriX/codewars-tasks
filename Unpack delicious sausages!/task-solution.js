function unpackSausages(truck) {
  let counter = 0,
    display = [];
  for (let i = 0; i < truck.length; i++)
    for (let j = 0; j < truck[i].length; j++)
      if (/^\[(.)\1{3}\]$/.test(truck[i][j]))
        if (++counter % 5) display = display.concat([...truck[i][j].slice(1, -1)]);
  return display.join(' ');
}
