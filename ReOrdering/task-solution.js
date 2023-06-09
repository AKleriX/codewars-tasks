function reOrdering(text) {
  let firstPart = text.match(/\b[A-Z]\w*\b/g);
  return (firstPart[0] + ' ' + text.replace(firstPart[0], '').replace(/\s+/g, ' ').trim()).trim();
}
