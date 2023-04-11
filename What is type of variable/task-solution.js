const type = (value) =>
  value === null
    ? 'null'
    : value === undefined
    ? 'undefined'
    : value.constructor.name.toLowerCase();
