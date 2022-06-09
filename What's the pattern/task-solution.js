function findPattern(arr) {
  let pattern = [];
  for (let i = 1; i < arr.length; i++) pattern.push(arr[i] - arr[i - 1]);
  for (let i = 1; i <= pattern.length; i++)
    if (
      !(pattern.length % i) &&
      (',' + pattern.slice(0, i).join()).repeat(pattern.length / i).slice(1) === pattern.join()
    )
      return pattern.slice(0, i);
  return pattern;
}
