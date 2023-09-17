const differences = (a) =>
  a.length > 1
    ? differences(
        a.reduce((ac, n, i, arr) => (!i ? ac : (ac.push(Math.abs(n - arr[i - 1])), ac)), []),
      )
    : a[0];
