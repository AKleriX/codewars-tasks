const arrayInfo = (arr) =>
  arr.length
    ? [
        [arr.length],
        [arr.filter((v) => Number.isInteger(v)).length || null],
        [arr.filter((v) => parseFloat(v) === v && !Number.isInteger(v)).length || null],
        [arr.filter((v) => typeof v === 'string' && v !== ' ').length || null],
        [arr.filter((v) => v === ' ').length || null],
      ]
    : 'Nothing in the array!';
