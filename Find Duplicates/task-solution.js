function duplicates(arr) {
  let dub = new Set();
  for (let i = 0; i < arr.length; i++) if (i !== arr.indexOf(arr[i])) dub.add(arr[i]);
  return Array.from(dub);
}
