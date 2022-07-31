bind = function (list, func) {
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    let newItem = func(list[i]);
    if (!Array.isArray(newItem)) throw 'ERROR! The returned value is not a list!';
    arr = arr.concat(newItem);
  }
  return arr;
};
