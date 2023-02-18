function shadesOfGrey(n) {
  let arr = [];
  for (let i = 1; i <= (n < 255 ? n : 254); i++)
    arr.push(`#${addZero(i.toString(16))}${addZero(i.toString(16))}${addZero(i.toString(16))}`);
  return arr;
}

const addZero = (n) => (n.length < 2 ? '0' + n : n);
