const mirror = (obj) => {
  let currentObj = {};
  for (let i in obj) currentObj[i] = [...i].reverse().join('');
  return currentObj;
};
