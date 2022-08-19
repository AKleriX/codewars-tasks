function lastSurvivors(strs, nums) {
  if (!strs.length) return '';
  let arr = strs.map((s) => [...s]),
    revArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    let col = [];
    for (let j = 0; j < arr.length; j++) col.push(arr[j][i]);
    revArr.push(col.join('').replace(/\s+/g, ''));
  }
  return revArr
    .map((r, i) => {
      let str = r.slice(0, r.length - nums[i] > 0 ? r.length - nums[i] : 0);
      return str;
    })
    .join('')
    .trim();
}
