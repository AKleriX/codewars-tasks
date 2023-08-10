/*
  function name:- isInertial
  input:- integer array
  ouput:- true if array is inertial false otherwise.
*/
const isInertial = (arr) => {
  let max = Math.max(...arr),
    minOdd = Math.min(...arr.filter((n) => n % 2)),
    evens = arr.filter((n) => !(n % 2));
  return evens.every((n) => n < minOdd || n === max) && minOdd !== Infinity && max % 2 === 0;
};
