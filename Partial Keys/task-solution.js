const partialKeys = (obj) => {
  return new Proxy(obj, {
    get(target, prop) {
      const keys = Object.keys(target).filter((key) => key.startsWith(prop));
      if (keys.length > 1) keys.sort();
      return keys.length > 0 ? target[keys[0]] : undefined;
    },
  });
};
