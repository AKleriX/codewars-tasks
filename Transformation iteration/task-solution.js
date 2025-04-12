const transform = (source, target) => {
  let result = [source],
    arr = source.split('');
  for (let i = 0; i < target.length; i++)
    if (arr[i] !== target[i]) {
      arr[i] = target[i];
      result.push(arr.join(''));
    }
  return result;
};
