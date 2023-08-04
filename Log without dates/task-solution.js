const checkLogs = (log) => log.reduce((d, t, i, arr) => (i ? d + (t <= arr[i - 1]) : d), 1);
