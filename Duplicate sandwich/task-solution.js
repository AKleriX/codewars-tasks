function duplicateSandwich(a) {
  let leftBorder = 0,
    rightBorder = a.length;
  for (let i = 0; i < a.length; i++)
    if (i !== a.lastIndexOf(a[i])) {
      leftBorder = i + 1;
      rightBorder = a.lastIndexOf(a[i]);
      break;
    }
  return a.slice(leftBorder, rightBorder);
}
