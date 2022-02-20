function parse(string) {
  let nodesData = string.split(' -> ');
  if (nodesData.length === 1) return null;
  let nodes = new Node(Number(nodesData[nodesData.length - 2]));
  for (let i = nodesData.length - 3; i >= 0; i--)
    nodes = new Node(Number(nodesData[i]), nodes);
  return nodes;  
}