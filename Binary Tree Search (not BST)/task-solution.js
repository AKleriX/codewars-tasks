const search = (n, root) =>
  root ? n === root.value || search(n, root.left) || search(n, root.right) : false;
