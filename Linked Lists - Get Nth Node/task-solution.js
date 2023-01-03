function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  for (let i = 0; i < index; i++) node = node.next || null;
  if (!node) throw new Error('ArgumentException');
  return node;
}
