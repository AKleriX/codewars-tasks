const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`;
    let nums = Array.from({ length: count + 1 }, (_, i) => i);
    return `${nums.join('+')}${nums.length > 1 ? ' = ' : '='}${nums.reduce((sum, n) => sum + n)}`;
  };

  return SequenceSum;
})();
