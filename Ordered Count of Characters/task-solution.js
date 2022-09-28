const orderedCount = function (text) {
  let counter = new Map();
  for (let i = 0; i < text.length; i++) counter.set(text[i], (counter.get(text[i]) || 0) + 1);
  return Array.from(counter);
};
