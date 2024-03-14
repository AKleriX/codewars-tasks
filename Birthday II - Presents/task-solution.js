const present = (x, y) =>
  x[0] === 'g'
    ? [...x].map((l) => String.fromCharCode(l.charCodeAt(0) + y)).join('')
    : x[0] === 'e' || x[0] === 'c'
    ? [...x].sort().join('')
    : x === 'bang'
    ? [...x].reduce((s, l) => s + l.charCodeAt(0) - y, 0)
    : x[0] === 'b'
    ? 'Take this back!'
    : x[0] === 'd'
    ? `pass out from excitement ${y} times`
    : 'Wrong input!';
