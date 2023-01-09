const isMonotone = function (arr) {
  return [...arr].sort((a, b) => a - b).join() === arr.join();
};
