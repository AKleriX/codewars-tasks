// prototype - a prototype to be inherited by newly created object
// properties (optional) - argument, to be passed to Object.defineProperties
//
// throws TypeError if `prototype` parameter is not object and is not null
//
// returns newly created object

Object.create = function (prototype, properties) {
  if (prototype === undefined || (typeof prototype !== 'object' && prototype !== null))
    throw new TypeError('Prototype must be an object or null');

  const obj = {};
  Object.setPrototypeOf(obj, prototype);

  if (properties !== undefined) Object.defineProperties(obj, properties);

  return obj;
};
