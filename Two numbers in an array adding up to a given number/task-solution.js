const hasPair = (A, sum) => {
  let left = 0,
    right = A.length - 1;

  while (left < right) {
    let currentSum = A[left] + A[right];
    if (currentSum === sum) return true;
    if (currentSum < sum) left++;
    else right--;
  }

  return false;
};
