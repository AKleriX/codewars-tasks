function getRootProperty(object, val) {
  for (let key in object) {
    if (Array.isArray(object[key])) {
      if (object[key].includes(val)) return key;
    } else if (getRootProperty(object[key], val)) return key;
  }
  return null;
}
