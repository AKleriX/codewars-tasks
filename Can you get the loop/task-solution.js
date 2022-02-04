function loop_size(node) {
  let counter = [];
  while (!counter.includes(node)) {
    counter.push(node);
    node = node.getNext();
  }
  return counter.length - counter.indexOf(node);
}
