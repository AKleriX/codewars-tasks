function sum() {
  if (arguments.length === 1) return (x) => sum(arguments[0], x);
  return arguments[0] + arguments[1];
}
