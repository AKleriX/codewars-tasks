const insertDashII = (num) =>
  [...num.toString()]
    .map((d, i, a) =>
      /[13579]/.test(d) && /[13579]/.test(a[i + 1])
        ? d + '-'
        : /[2468]/.test(d) && /[2468]/.test(a[i + 1])
        ? d + '*'
        : d,
    )
    .join('');
