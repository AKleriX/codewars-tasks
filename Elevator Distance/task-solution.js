const elevatorDistance = (array) =>
  array.reduce((s, f, i, arr) => (!i ? s : s + Math.abs(f - arr[i - 1])), 0);
