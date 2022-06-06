function isReoccuring(items) {
  let seq = [];
  for (let i = 0; i < items.length; i++) {
    let lastIndex = seq.lastIndexOf(items[i]);
    if (lastIndex === seq.length - 1 || lastIndex === -1) seq.push(items[i]);
    else return true;
  }
  return false;
}
