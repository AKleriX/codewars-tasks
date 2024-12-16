const countSkills = (tree, required) => {
  const visited = new Set();

  const traverse = (skill) => {
    while (!visited.has(skill) && skill !== 0) {
      visited.add(skill);
      skill = tree[skill];
    }
    visited.add(0);
  };

  for (const skill of required) traverse(skill);

  return visited.size;
};
