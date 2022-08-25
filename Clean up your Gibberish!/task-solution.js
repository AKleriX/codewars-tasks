function cleanItUp(data) {
  let clearData = data.replace(/[^a-z]/gi, ''),
    words = [];
  for (let i = 0; i < clearData.length; i += 5)
    if (i + 5 <= clearData.length) words.push(clearData.slice(i, i + 5));
  return words.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
