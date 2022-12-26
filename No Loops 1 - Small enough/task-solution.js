function smallEnough(a, limit) {
  const check = (arr) => {
    if (arr[0] > limit) return false;
    else if (arr.length > 1) return check(arr.slice(1));
    return true;
  };
  return check(a);
}
