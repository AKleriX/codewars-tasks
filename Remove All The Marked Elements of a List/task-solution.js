Array.prototype.remove_ = function (integer_list, values_list) {
  let new_arr = [];
  for (let i = 0; i < integer_list.length; i++)
    if (!values_list.includes(integer_list[i])) new_arr.push(integer_list[i]);
  return new_arr;
};
