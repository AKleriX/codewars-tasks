const typer = {
  isNumber: (x) =>
    (typeof x === 'number' && !isNaN(x)) || (x instanceof Number && !isNaN(x.valueOf())),
  isString: (x) => typeof x === 'string' || x instanceof String,
  isArray: (x) => Array.isArray(x),
  isFunction: (x) => typeof x === 'function',
  isDate: (x) => x instanceof Date,
  isRegExp: (x) => x instanceof RegExp,
  isBoolean: (x) => typeof x === 'boolean' || x instanceof Boolean,
  isError: (x) => x instanceof Error,
  isNull: (x) => x === null,
  isUndefined: (x) => x === undefined,
};
