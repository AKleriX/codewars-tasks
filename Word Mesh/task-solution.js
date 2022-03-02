function wordMesh(arr) {
  let mesh = '';
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = `${arr[i]} ${arr[i + 1]}`.match(/(.+) \1/);
    if (temp) mesh += temp[1];
    else return 'failed to mesh';
  }
  return mesh;
}
