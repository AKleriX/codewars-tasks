const returnSpecifics = (obj) => {
  const nums = [],
    methodsNames = [];
  for (let k in obj)
    if (typeof obj[k] === 'number') nums.push(obj[k]);
    else if (typeof obj[k] === 'function') methodsNames.push(k);
  return Object.keys(obj).length ? [...nums, ...methodsNames] : ['The Object is Empty'];
};
