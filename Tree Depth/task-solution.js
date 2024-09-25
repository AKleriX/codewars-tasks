const recordDepth = (tree, currentDepth = 0) => {
  if (typeof tree !== 'object' || tree === null || Array.isArray(tree)) return null;

  tree.depth = currentDepth;

  for (let key in tree)
    if (typeof tree[key] === 'object' && tree[key] !== null)
      recordDepth(tree[key], currentDepth + 1);

  return tree;
};
