function checkThreeAndTwo(array) {
  let counter = {};
  for (let i = 0; i < array.length; i++) counter[array[i]] = (counter[array[i]] || 0) + 1;
  return (
    Object.values(counter)
      .sort()
      .filter((n, i) => (n === 2 && !i) || (n === 3 && i)).length === 2
  );
}
