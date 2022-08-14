Object.deepFreeze = function (object) {
  for (let key in object) if (typeof object[key] === 'object') Object.deepFreeze(object[key]);
  Object.freeze(object);
};
