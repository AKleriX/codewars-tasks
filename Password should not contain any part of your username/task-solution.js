const validate = (username, password) => {
  let max = 0,
    arr = Array.from({ length: username.length + 1 }, (_, i) =>
      Array.from({ length: password.length + 1 }, (_, j) => 0),
    );
  for (let i = 1; i < username.length + 1; i++)
    for (let j = 1; j < password.length + 1; j++)
      if (username[i - 1] === password[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
        max = Math.max(arr[i][j], max);
      }
  return max < Math.min(username.length, password.length) / 2;
};
