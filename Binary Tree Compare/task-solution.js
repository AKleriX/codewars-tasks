function compare(a, b) {
  if (a && b) return a.val === b.val && compare(a.left, b.left) && compare(a.right, b.right);
  return a === b;
}
