const nums = {
  EORZ: 0,
  ENO: 1,
  OTW: 2,
  EEHRT: 3,
  FORU: 4,
  EFIV: 5,
  ISX: 6,
  EENSV: 7,
  EGHIT: 8,
  EINN: 9,
};

function recover(str) {
  let leftPoint = 0,
    rightPoint = 3,
    res = '';
  while (leftPoint + 3 < str.length + 1) {
    let word = [...str.slice(leftPoint, rightPoint)].sort().join('');
    if (nums.hasOwnProperty(word)) {
      res += nums[word];
      leftPoint++;
    } else if (rightPoint - leftPoint === 5) {
      leftPoint++;
      rightPoint = leftPoint + 2;
    }
    rightPoint++;
  }
  return res.length ? res : 'No digits found';
}
