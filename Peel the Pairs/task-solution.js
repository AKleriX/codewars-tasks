const peelPairs = (str, n) => {
  let arrStr = [...str];
  for (let i = 0; i < arrStr.length; i++)
    for (let j = i + 1; j < arrStr.length; j++)
      if (arrStr[i] !== '*' && arrStr[j] !== '*' && +arrStr[i] + +arrStr[j] === n) {
        arrStr[i] = '*';
        arrStr[j] = '*';
        break;
      }
  return arrStr.filter((v) => v !== '*').join('');
};
