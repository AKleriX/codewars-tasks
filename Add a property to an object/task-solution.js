const addProperty = (obj, prop, value) => {
  if (obj.hasOwnProperty(prop)) throw new Error(`The property named "${prop}" already exists`);
  obj[prop] = value;
};
