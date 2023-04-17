const processData = (data) => data.reduce((p, a) => p * a.reduce((s, n) => s - n), 1);
