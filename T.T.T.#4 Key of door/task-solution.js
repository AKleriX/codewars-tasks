const findKey = (nums) => {
  const columns = nums.map(String).map((num) => num.split('')),
    passcode = [];

  for (let col = 0; col < columns[0].length; col++) {
    const counts = new Map();

    for (let row = 0; row < columns.length; row++) {
      const digit = columns[row][col];
      counts.set(digit, (counts.get(digit) || 0) + 1);
    }

    const unique = [...counts].find(([_, count]) => count === 1);
    passcode.push(unique[0]);
  }

  return passcode.join('');
};
