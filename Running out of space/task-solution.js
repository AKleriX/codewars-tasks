const spacey = (array) => array.reduce((a, w) => (a[0].push((a[1] += w)), a), [[], ''])[0];
