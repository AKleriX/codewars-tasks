function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  if (!source) throw new Error('An empty source!');
  return new Context(source.next, new Node(source.data, dest));
}
