function containAllRots(strng, arr) {
  let allRots = [],
    dubStr = strng + strng;
  for (let i = 0; i < strng.length; i++) allRots.push(dubStr.slice(i, i + strng.length));
  return !allRots.filter((r) => !arr.includes(r)).length;
}
