const sc = (exchange) => {
  let lastPos = '2';
  for (let i = 0; i < exchange.length; i++) {
    const hats = exchange[i].split('-');
    if (hats.includes(lastPos)) lastPos = hats.filter((h) => h !== lastPos)[0];
  }
  return lastPos;
};
