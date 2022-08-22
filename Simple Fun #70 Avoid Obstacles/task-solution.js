function avoidObstacles(arr) {
  const isAvailableLen = (len) => {
    let correntPos = 0;
    for (let i = 0; i < arr.length; i++) if (!(arr[i] % len)) return false;
    return true;
  };
  let len = 2;
  while (!isAvailableLen(len)) len++;
  return len;
}
