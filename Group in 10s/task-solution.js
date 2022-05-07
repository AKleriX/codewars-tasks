function groupIn10s() {
  let arr = [];
  for (let i in arguments)
    if (arr[Number(arguments[i].toString().slice(0, -1))])
      arr[Number(arguments[i].toString().slice(0, -1))].push(arguments[i]);
    else arr[Number(arguments[i].toString().slice(0, -1))] = [arguments[i]];
  return arr.map((a) => a.sort());
}
